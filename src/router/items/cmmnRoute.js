const cmmnRoutes = [
  {
    path: "/",
    redirect: "/client/home",
  },
  {
    path: "/:catchAll(.*)", // 모든 경로에 일치
    component: function () {
      return import("@/views/common/ErrorPage.vue");
    },
  },
];

export default cmmnRoutes;
