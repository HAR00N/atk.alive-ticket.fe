import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, //'env.파일명' 에 따라서 서버의 접속 주소가 달라짐
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

instance.interceptors.request.use(
  (config) => {
    config.headers["Access-Control-Allow-Origin"] = "*";

    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  async (response) => {
    console.log("instance.interceptors.response 진입");
    response.headers["Access-Control-Allow-Origin"] = "*";

    /*console.log(response.headers.Authorization)*/
    return await response;
  },

  async (error) => {
    //const errorAPI = error.config; //에러를 처리 한 후 다시 되돌리기 위해 호출된 API를 저장해 둔다.

    return await Promise.reject(error);
  }
);
