/* eslint-disable no-unused-vars */
import router from "@/router";

export default {
  install: (app, options) => {
    /** state 없이 단순 router 이동만 사용하는 함수 */
    app.config.globalProperties.$routerPush = (_path) => {
      router.push(_path);
    };

    app.config.globalProperties.$routerName = (_name) => {
      router.push({ name: _name });
    };
  },
};
