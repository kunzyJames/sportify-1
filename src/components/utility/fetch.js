import axios from 'axios';
import Cookies from 'js-cookie';

 const URL = 'http://api.football-data.org/';
 const Access_token = Cookies.get('token');


 export const Get = async (method, callbackfunction) => {
   
  //Access_token = Cookies.get(ModuleName + '_AppToken') || Cookies.get('token');
  const response = axios.get(`${URL}${method}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'X-Auth-Token': Access_token,
      withCredentials: true,
      'Access-Control-Allow-Credentials': true,
      crossorigin: true,
      'Access-Control-Allow-Methods': 'GET',
      'content-type': 'application/json',
      
    },
  });
  await response
    .then((response) => {
      let result = response.data;
      callbackfunction(result);
    })
    .catch((error) => {
      callbackfunction(error);
    });
};



export default {

  Get,

}