import apiClient from './axois';
import { setUser } from '../Utils/common/Common';

async function userLogin(creds) {
  return apiClient.post('/login', creds).then((response) => {
    if (response) {
      return response.data;
    }
    return false;
  });
}
export default userLogin;
