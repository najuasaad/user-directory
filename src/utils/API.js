import axios from "axios";

function getUserList() {
  return axios.get("https://randomuser.me/api/");
}

export default getUserList
