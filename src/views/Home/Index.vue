<template>
  <div class="home-view">
    <HomeTitle />
    <MainForm />
  </div>
</template>

<script>
import HomeTitle from './HomeTitle.vue';

import MainForm from './HomeForm.vue';

export default {
  name: 'HomeView',
  components: {
    HomeTitle,
    MainForm,
  },
};
</script>
