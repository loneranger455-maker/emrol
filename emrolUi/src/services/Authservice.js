import axios from "axios";
import { setMessage } from "../redux/slice/messages";
const API_URL = "http://localhost:8000/api/auth/";

const register = (formdata) => {
  return axios.post(API_URL + "signup/",formdata).then((response) => {
    if (response.data.token) {
      localStorage.setItem("user",JSON.stringify(response.data));
      window.location.href = '/dashboard';
    }
    console.log(response)
    return(response.data)
  

}).catch((err)=>{
    console.log(err)
    return err.response.data.errors})}

const login = (formdata) => {
  return axios.post(API_URL + "login/",formdata)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user",JSON.stringify(response.data));
        window.location.href = '/dashboard';
        
      }
      console.log(response)
      return response.data.errors;
    }).catch(err=>(err.response.data.errors));
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;