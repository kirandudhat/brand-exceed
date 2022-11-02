import apiClient from './axois';
import { setUser } from '../Utils/common/Common';

async function userLogin(creds) {
  return apiClient.post('/api/v1/auth/login', creds).then((response) => {
    if (response) {
      const { result, message } = response.data;

      if (result) {
        setUser(result);
      }

      return response.data;
    }
    return false;
  });
}
export default userLogin;
