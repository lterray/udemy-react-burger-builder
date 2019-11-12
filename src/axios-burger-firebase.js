import axios from 'axios';
import Noty from 'noty';
import "../node_modules/noty/lib/noty.css";
import "../node_modules/noty/lib/themes/mint.css";

const axiosFirebase = axios.create({
  baseURL: 'https://react-my-burger-56aff.firebaseio.com'
});

axiosFirebase.interceptors.response.use(response => {
  // console.log(response);
  return response;
}, error => {
  new Noty({
    type: 'error',
    layout: 'topRight',
    text: 'Request\nFAILED'
  }).show();

  return Promise.reject(error);
});

export default axiosFirebase;