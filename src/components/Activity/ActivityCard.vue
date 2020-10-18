<template>
  <div class="activity">
    <ActivityCost :cost="cost" />
    <div class="info">
      <h2 class="title">
        {{ name }}
      </h2>
      <div class="content">
        <ActivityRewards :rewards="todayRewards" />
      </div>
    </div>
    <div class="collapsible" ref="js-collapsible">
      <div class="collapsibleContent" ref="js-collapsible-content">
        <ActivityPurposeList v-if="usedForList.length > 0"
                            :usedFor="renderedItemsList" />
        <ActivityPurposeIcons v-if="usedForIcons.length > 0" 
                              :usedFor="renderedItemsIcons" />
      </div>
    </div>
    <div v-if="hasCollapsibleContent" class="toggle">
      <button class="toggleBtn" v-on:click="toggleAccordion($event)">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script>
import ActivityRewards from './ActivityRewards';
import ActivityPurposeIcons from './ActivityPurposeIcons';
import ActivityPurposeList from './ActivityPurposeList';
import ActivityCost from './ActivityCost';

export default {
  name: 'ActivityCard',
  components: {
    ActivityRewards,
    ActivityPurposeIcons,
    ActivityPurposeList,
    ActivityCost,
  },
  props: {
    'name': String,
    'cost': Number,
    'day': Symbol,
    'type': Symbol,
    'todayRewards': Array,
    'usedForIcons': Array,
    'usedForList': Array,
  },
  data: function() {
    return {
      accordionOpen: this.buttonState || false,
      initialHeight: 0, // initialized in onMount() lifecycle hook
      initialIconsAmt: 6,
      initialListAmt: 6,
    }
  },
  computed: {
    buttonText: function() {
      return this.accordionOpen ? 'Show Less' : 'Show More';
    },
    renderedItemsIcons: function() {
      return this.accordionOpen ? this.usedForIcons : this.usedForIcons.slice(0, this.initialIconsAmt);
    },
    renderedItemsList: function() {
      return this.accordionOpen ? this.usedForList : this.usedForList.slice(0, this.initialListAmt);
    },
    hasCollapsibleContent: function() {
      return this.usedForIcons.length > this.initialIconsAmt || this.usedForList.length > this.initialListAmt;
    },
    accordionEl: function() {
      return this.$refs['js-collapsible'];
    },
    accordionContentEl: function() {
      return this.$refs['js-collapsible-content'];
    }
  },
  methods: {
    toggleAccordion: function() {
      let isClosing = this.accordionOpen === true;
      // Set the initial (before animation) height of the element inline
      this.accordionEl.style.height = `${this.accordionContentEl.offsetHeight}px`;
      window.requestAnimationFrame(() => {
        // If opening, render the data before we actually open
        if (!isClosing) { this.accordionOpen = true; }
        
        window.requestAnimationFrame(() => {
          // Update the inline height to the new content's height
          this.accordionEl.style.height = isClosing ? 
            `${this.initialHeight}px` :
            `${this.accordionContentEl.offsetHeight}px`;

          // Once the animation is over, remove the inline height style
          this.accordionEl.addEventListener('transitionend', () => {
            this.accordionEl.style.height = '';

            // If closing, don't update the data until we are closed
            if (isClosing) { this.accordionOpen = false; }
          }, { once: true });
        });
      });
    },
  },
  mounted: function() {
    this.initialHeight = this.accordionContentEl.offsetHeight;
  },
  updated: function() {
    console.log("updated");
  }
}
</script>

<style lang="scss" scoped>
.activity {
  @include l-card;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}

.info {
  padding: 8px;
  padding-bottom: 16px;
}

.title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 4px;
  margin-right: 54px;
}

.content {
  display: flex;
  justify-content: space-between;
}

.collapsible {
  transition: height 0.1s ease-in-out;
  overflow: hidden;
  margin-bottom: 8px;
}

.toggle {
  margin: 0 -8px;
  position: relative;
}

.toggleBtn {
  @include button-focus-state;
  display: block;
  width: calc(68px * 3);
  padding: 4px 8px;
  border: 1px solid #444;
  background-color: #fff;
  border-radius: 999px;
  margin: 0 auto;

  &::before
  {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #444;
    z-index: -1;
  }
}
</style>