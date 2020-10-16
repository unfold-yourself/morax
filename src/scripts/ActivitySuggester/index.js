import { domains } from '@/assets/data/domains';
import { Character } from '@/assets/data/characters/_Character.js';

class ActivitySuggester {
  constructor() {
    console.log("new resinHelper");
    this.date = new Date();
  }

  /**
   * Update a weighted priority mask by adding weight to a key
   *  Safe access (creates the key/val if it doesn't already exist)
   * @param {Object} map 
   * @param {string|Symbol} key 
   * @param {number} addition 
   */
  updateMapVal(map, key, addition) {
    if (!Object.prototype.hasOwnProperty.call(map, key)) {
      map[key] = 0;
    }
    map[key] += addition;
  }

  /**
   * Convert the itemsets (lists of weapons/characters) into a map of all
   *  necessary materials & their relative importance
   * @param {Object[]} itemsets list of itemsets in priority order of
   *  highest to lowest
   * @returns {Object} Map of {MaterialName: int priority} where higher
   *  numbers = higher priority
   */
  buildMaterialMap(itemsets) {
    let materialMap = {};
    itemsets.reverse().forEach((itemset, priorityLevel) => {
      itemset.forEach(item => {
        if (item instanceof Character) {
          item.talentMaterials.forEach(material => {
            this.updateMapVal(materialMap, material, 100**priorityLevel);
          });
        }
      });
    });
  
    return materialMap
  }

  /**
   * Given a weighted list of materials, create a prioritized list of domains
   *  to acquire those materials
   * @param {Object[]} domains List of all domains that should be considered
   * @param {Object[]} materialMap Created by this.buildMaterialMap()
   */
  buildDomainMap(domains, materialMap, dayOfWeek) {
    return domains.reduce((domainMap, domain) => {
      if (!domain.rewards) { return domainMap }

      // Check if the domain's rewards are in materialMap
      const rewards = domain.rewards[dayOfWeek];
      rewards && rewards.forEach(reward => {
        console.log(reward);
        // If they are, add that material's "value" to the domainMap
        if (Object.prototype.hasOwnProperty.call(materialMap, reward)) {
          this.updateMapVal(domainMap, domain.id, materialMap[reward]);
        }
      });

      return domainMap;
    }, {});
  }

  calculate(characters, dayOfWeek) {
    // This data should come from some UI element
    const testData = [
      [characters[0]],
      [characters[1]]
    ];

    const materialMap = this.buildMaterialMap(testData);
    const domainMap = this.buildDomainMap(domains, materialMap, dayOfWeek);
    console.log(domainMap);
    return domainMap;
  }
}

const instance = new ActivitySuggester;

export {
  instance
};