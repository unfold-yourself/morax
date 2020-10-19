<template>
  <div class="activity">
    <ActivityCost :cost="cost" />
    <div class="info">
      <h2 class="title">
        {{ displayName }}
      </h2>
      <ActivityRewards :rewards="todayRewards" />
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
      <button :class="accordionOpen ? 'toggleBtn' : 'toggleBtn toggleBtn--withLine'"
              v-on:click="toggleAccordion">
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
    'displayName': String,
    'cost': Number,
    'day': Symbol,
    'type': Symbol,
    'todayRewards': Array,
    'usedForIcons': Array,
    'usedForList': Array,
  },
  data: function() {
    return {
      accordionOpen: false,
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
}
</script>

<style lang="scss" scoped>
.activity {
  @include l-card;
  position: relative;
  background-color: $card-bg-color;
  z-index: 10;
}

.info {
  padding: 8px;
  padding-bottom: 16px;
}

.title {
  @include Heading--h2;
  margin-bottom: 4px;
  margin-right: 54px;
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
  @include button--card;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    transition: width 0.1s ease-in-out;
    height: 1px;
    background-color: $card-emph-color;
    z-index: -1;
  }

  &--withLine::after
  {
    width: 100%;
  }
}
</style>