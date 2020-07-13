<template>
  <div class="heroes-list border-top border-secondary mt-5 pt-5">
    <b-table
      :items="heroes"
      :fields="fields"
      dark
      hover
      small
      striped
      stacked="sm"
    >
      <template v-slot:cell(name)="data">
        <HeroIco :hero="data.item" />
      </template>
      <template v-slot:cell(class)="data">
        <HeroClassLevel
          :hero="{ classSlug: data.item.class, level: data.item.level }"
        />
      </template>
      <template v-slot:cell(kills)="data">
        <span>{{ data.item.kills.elites | formatNumber }}</span>
      </template>
    </b-table>
  </div>
</template>

<script>
import { formatNumber } from '@/filters/numeral';
import HeroIco from './HeroIco.vue';
import HeroClassLevel from './HeroClassLevel.vue';

export default {
  name: 'HeroesList',

  filters: {
    formatNumber,
  },

  components: { HeroIco, HeroClassLevel },

  props: {
    heroes: {
      required: true,
      type: Array,
    },
  },

  data() {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name',
          sortable: true,
        },
        {
          key: 'class',
          label: 'Class',
          sortable: true,
        },
        {
          key: 'kills',
          label: 'Elite Kills',
          sortable: true,
        },
      ],
    };
  },
};
</script>
