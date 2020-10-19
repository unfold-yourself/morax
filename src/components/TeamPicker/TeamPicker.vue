<template>
  <TeamPickerLayout :characterPickerLabel="characterPickerLabel"
                    :characterOptions="characterOptions"
                    :weaponPickerLabel="weaponPickerLabel"
                    :weaponOptions="weaponOptions"
                    @update-icon-picker="characterSelectHandler"
                    @update-search-picker="weaponSelectHandler" />
</template>

<script>
import TeamPickerLayout from './TeamPickerLayout.vue';
import { characters } from '@/assets/data/characters';
import { weapons } from '@/assets/data/weapons';

export default {
  name: 'TeamPicker',
  components: {
    TeamPickerLayout,
  },
  data: function() {
    return {
      characterPickerLabel: 'Select characters:',
      characterOptions: characters,
      weaponPickerLabel: 'Select weapons:',
      weaponOptions: weapons,
    }
  },
  methods: {
    characterSelectHandler: function(selected) {
      let selectedChars = characters.filter(
        character => selected.includes(character.id)
      );

      this.$emit('update-selected-characters', selectedChars);
    },
    weaponSelectHandler: function(selected) {
      let selectedWeapons = weapons.filter(
        weapon => selected.includes(weapon.id)
      );

      this.$emit('update-selected-weapons', selectedWeapons);
    }
  },
}
</script>
