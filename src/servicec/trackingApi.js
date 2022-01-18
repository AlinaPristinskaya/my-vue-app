import axios from "axios";
axios.defaults.baseURL = "http://localhost:3005/trackingInfo";

const fetchTrackingId = (id) => {
  return axios.get(`/${id}`).then((response) => response.data);
};

const fetchChoice = ({ id, value }) => {
  const data = {
    choice: value,
  };

  return axios.patch(`/${id}`, data).then((response) => response.data);
};

export default { fetchTrackingId, fetchChoice };
