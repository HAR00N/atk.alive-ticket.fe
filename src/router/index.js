import { createRouter, createWebHistory } from "vue-router";
import cmmnRoutes from "./items/cmmnRoute";
import clientRoutes from "./items/clientRoute";

const allRoutes = [...cmmnRoutes, ...clientRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  routes: allRoutes,
});

export default router;
