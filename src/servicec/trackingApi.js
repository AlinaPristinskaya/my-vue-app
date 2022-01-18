import axios from "axios";
axios.defaults.baseURL = "http://localhost:3005/trackingInfo";

const fetchTrackingId = (id) => {
  return axios.get(`/${id}`).then((response) => response);
};

const fetchChoice = ({ id, choice }) => {
  const data = {
    isChoice: choice,
  };

  return axios.patch(`/${id}`, data).then((response) => response);
};

export default { fetchTrackingId, fetchChoice };
