import { Character } from '@/assets/data/types/Character.js';

/**
 * Priority Values:
 *  Values [0 - 99] are reserved for default priorities, in the general order of:
 *   Weapon Ascension Domain > Character Talent Domain > Leyline > Artifact Domain
 *  this.calculate() function accepts a list of lists of characters/items in the 
 *    format of [[HIGH PRIORITY ITEMS], [MED PRIORITY ITEMS], [LOW PRIORITY ITEMS], .etc]
 *    This is enforced by adding 100*(reverse(idx)+1) to the priority map. (range: [100 - inf]).
 *    Therefore, any items specified in the priority list will be higher priority than the default.
 */
class ActivitySuggester {
  constructor() {
    
  }

  /**
   * Update a weighted priority map by adding weight to a key
   *  - with safe access (creates the key/val if it doesn't already exist)
   * @param {Object} map 
   * @param {string|Symbol} key 
   * @param {number} additionalWeight 
   * @param {number} priorityLevel
   */
  updateMapVal(map, key, additionalWeight, priorityLevel=0) {
    if (!Object.prototype.hasOwnProperty.call(map, key)) {
      map[key] = 100*priorityLevel;
    }
    map[key] += additionalWeight;
  }

  /**
   * Convert the itemsets (lists of weapons/characters) into a map of all
   *  necessary materials & their relative importance
   * @param {Object[]} itemsets list of itemsets in priority order of
   *  highest to lowest
   * @returns {Object} Map of {MaterialName: int - priority} where higher
   *  numbers = higher priority
   */
  buildMaterialMap(itemsets) {
    let materialMap = {};
    itemsets.reverse().forEach((itemset, itemsetIdx) => {
      itemset.forEach(item => {
        if (item instanceof Character) {
          item.talentMaterials.forEach(material => {
            this.updateMapVal(materialMap, material, 1, itemsetIdx+1);
          });
        }
      });
    });
  
    return materialMap
  }

  /**
   * Given a weighted list of materials, create a prioritized list of activities
   *  to acquire those materials
   * @param {Object[]} activities List of all activities that should be considered
   * @param {Object} materialMap Created by this.buildMaterialMap()
   */
  buildActivityIdMap(activities, materialMap, dayOfWeek) {
    return activities.reduce((activityMap, activity) => {
      // All Activities have a base priority (set in assets/data/domains/[DOMAIN].js)
      this.updateMapVal(activityMap, activity.id, activity.basePriority);

      // Otherwise, assign a priority value based on the priority of the rewarded materials
      if (activity.rewards) {
        const rewards = activity.rewards[dayOfWeek];
        rewards && rewards.forEach(reward => {
          // Check `materialMap` for the priority of each reward
          if (Object.prototype.hasOwnProperty.call(materialMap, reward)) {
            this.updateMapVal(activityMap, activity.id, materialMap[reward]);
          }
        });
      }

      return activityMap;
    }, {});
  }

  calculate(priorities, activities, dayOfWeek) {
    const materialMap = this.buildMaterialMap(priorities);
    const activityIdMap = this.buildActivityIdMap(activities, materialMap, dayOfWeek);

    // construct an array to sort the activities by priority
    let sortable = [];
    for (const [activityId, priority] of Object.entries(activityIdMap)) {
      sortable.push({
        priority: priority,
        activity: activities.find(activity => activity.id === parseInt(activityId)),
      });
    }

    return sortable.sort((lho, rho) => {
      return rho.priority - lho.priority;
    }).map(el => el.activity);
  }
}

const instance = new ActivitySuggester;

export {
  instance
};