
import axios from 'axios';

const composeToken = (token) => token ? { Authorization: `Bearer ${token}` } : {};

const apiClient = (url, method, body = {}, token = '') => axios({
  method,
  url: `http://localhost:8001${url}`,
  data: body,
  headers: {
    ...composeToken(token)
  }
});

export default apiClient;