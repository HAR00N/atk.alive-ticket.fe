import AdminIndex from "@/layouts/admin/AdminIndex.vue";

const cmmnRoutes = [
  {
    path: "/:catchAll(.*)", // 모든 경로에 일치
    component: function () {
      return import("@/views/common/ErrorPage.vue");
    },
  },
  {
    path: "/admin", // 모든 경로에 일치
    name: "admin",
    redirect: "/admin/dashboard",
    component: AdminIndex,
    children: [
      {
        path: "/admin/dashboard",
        name: "adminHome",
        component: function () {
          return import("@/views/admin/mainPage/AdminMain.vue");
        },
      },
    ],
  },
];

export default cmmnRoutes;
