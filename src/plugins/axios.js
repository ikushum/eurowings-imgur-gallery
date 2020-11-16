import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

axios.interceptors.request.use(async (config) => {
  /* eslint-disable-next-line no-param-reassign */
  config.headers = {
    ...config.headers,
    Authorization: `Client-ID ${process.env.VUE_APP_IMGUR_CLIENT_ID}`,
  };
  return config;
});

Vue.use(VueAxios, axios);
