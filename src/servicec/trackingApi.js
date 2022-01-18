import axios from "axios";
axios.defaults.baseURL = "http://localhost:3005/trackingInfo";

const fetchTracking = (code) => {
  return axios.get(`/${code}`).then((response) => response.data);
};

export default { fetchTracking };
