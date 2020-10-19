<template>
  <TeamPickerLayout :characterPickerLabel="characterPickerLabel"
                    :characterOptions="characterOptions"
                    @update-icon-picker="characterSelectHandler" />
</template>

<script>
import TeamPickerLayout from './TeamPickerLayout.vue';
import { characters } from '@/assets/data/characters';

export default {
  name: 'TeamPicker',
  components: {
    TeamPickerLayout,
  },
  data: function() {
    return {
      characterPickerLabel: 'Select which character(s) ...',
      characterOptions: characters,
      weaponPickerLabel: 'Select which weapon(s) ...',
    }
  },
  methods: {
    characterSelectHandler: function(selected) {
      let selectedChars = characters.filter(
        character => selected.includes(character.id)
      );

      this.$emit('update-selected-characters', selectedChars);
    }
  },
}
</script>
