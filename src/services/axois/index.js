import axios from 'axios';

const apiClient = axios.create({
  baseURL: `http://127.0.0.1:8000/api`
});

apiClient.interceptors.request.use((request) => {

//   const accessToken = getUser() ? getUser().token : null;
//   if (accessToken) {
//     request.headers.Authorization = `Bearer ${accessToken}`;
//   }
  return request;
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("error",error)
    // const { code, message } = error.response.data;

    // if (code === 401 || message === 'auth token is invalid') {
    //   removeUser();
    //   history.push('/login');
    // }

    return Promise.reject(error);
  }
);

export default apiClient;
