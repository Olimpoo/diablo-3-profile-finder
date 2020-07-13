import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/region/:region/profile/:battleTag', name: 'Profile' },
  { path: '/region/:region/profile/:battleTag/hero/:heroId', name: 'Hero' },
  { path: '/about', name: 'About' },
  { path: '/error', name: 'Error' },
  { path: '*', redirect: { name: 'Home' } },
];

const routes = routerOptions.map((route) => ({
  ...route,

  component: () =>
    // eslint-disable-next-line
    import(
      // eslint-disable-next-line
      /* webpackChunkName: "[request]" */ `@/views/${route.name}/Index.vue`
    ),
}));

const router = new VueRouter({
  routes,
});

export default router;
