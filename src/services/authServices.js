import apiClient from './axois';
import { setUser } from '../Utils/common/Common';

async function userLogin(creds) {
  return apiClient.post('/login', creds).then((response) => {
    let role = 0
    if (response.data.status != 0) {
    if(response.data.data.role == '1' || response.data.data.role == '2'){
      role = Number(response.data.data.role)
    } else {
      role = Math.min(...JSON.parse(response.data.data.role))
    }
    
    // let role = response.data.data.role == '1' || response.data.data.role == '2'? Number(response.data.data.role) : JSON.parse(response.data.data.role)
      setUser({...response.data.data, role: role  })
      return response.data;
    } else {
      return response.data;

    }
  });
}
export default userLogin;
