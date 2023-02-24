import api from '../utils/api';

const AuthService = {
    login: async function(credentials) {
      const response = await api.post('/login', credentials);
      const data = await response.data;
      localStorage.setItem('token', data.token);
      return data.user;
    },
    signup: async function(user) {
      const response = await api.post('/signup', user);
      const data = await response.data;
      localStorage.setItem('token', data.token);
      return data.user;
    },
    logout: function() {
      localStorage.removeItem('token');
    },
    getUser: async function() {
      const response = await api.get('/me');
      return response.data;
    }
  };
  
  export default AuthService;