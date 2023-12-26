import ClientIndex from "@/layouts/client/ClientIndex.vue";
import { loginstore } from "@/store/login";
import pinia from "@/store/index";

const beforeauth = (isAuth) => (from, to, next) => {
  const getLoginstore = loginstore(pinia);
  const isLogin = getLoginstore.getloginstate;

  if (isLogin && isAuth) {
    return next();
  } else {
    if (confirm("로그인이 되어있지 않거나 토큰이 만료되었습니다. \n 로그인을 해주새요.")) {
      return next("/login");
    } else {
      return next("/client/home");
    }
  }
};

const clientRoutes = [
  {
    path: "/client",
    name: "client",
    redirect: "/client/home",
    component: ClientIndex,
    children: [
      {
        path: "/client/home",
        name: "clientHome",
        component: function () {
          return import("@/views/client/home/HomePage.vue");
        },
      },
      {
        path: "/client/tickets",
        name: "tickets",
        component: function () {
          return import("@/views/client/tickets/TicketsList.vue");
        },
        beforeEnter: beforeauth(true),
      },
      {
        path: "/client/tickets2",
        name: "tickets2",
        component: function () {
          return import("@/views/client/tickets/TicketList_new.vue");
        },
        beforeEnter: beforeauth(true),
      },
      {
        path: "/client/tickets/detail/:id",
        name: "detail",
        component: function () {
          return import("@/views/client/tickets/TicketsDetail.vue");
        },
        beforeEnter: beforeauth(true),
      },
      {
        path: "/client/submit",
        name: "submit",
        component: function () {
          return import("@/views/client/submit/SubmitTicket.vue");
        },
        beforeEnter: beforeauth(true),
      },
      {
        path: "/client/mypage",
        name: "mypage",
        component: function () {
          return import("@/views/client/mypage/MypageMain.vue");
        },
        beforeEnter: beforeauth(true),
      },
      {
        path: "/client/mypage/update",
        name: "mypageUpdate",
        component: function () {
          return import("@/views/client/mypage/MypageUpdate.vue");
        },
        beforeEnter: beforeauth(true),
      },
      {
        path: "/login",
        name: "login",
        component: function () {
          return import("@/views/common/account/LogIn.vue");
        },
      },
      {
        path: "/signin",
        name: "signin",
        component: function () {
          return import("@/views/common/account/SignIn.vue");
        },
      },

      // {
      //   path: "/about",
      //   name: "about",
      //   component: function () {
      //     return import(/* webpackChunkName: "about" */ "@/views/AboutView.vue");
      //   },
      // },
    ],
  },
];

export default clientRoutes;
