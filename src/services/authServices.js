import apiClient from './axois';
import { setUser } from '../Utils/common/Common';

async function userLogin(creds) {
  return apiClient.post('/login', creds).then((response) => {
    console.log("response",response.data.data)
    if (response) {
      setUser(response.data.data)
      return response.data;
    }
    return false;
  });
}
export default userLogin;
