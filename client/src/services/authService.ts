import api from '@/lib/api';

export const authService = {
  login: async (username: string, password: string) => {
    const res = await api.post('/auth/login', {
      username,
      password,
    });

    const token = res.data.token;

    localStorage.setItem('token', token);

    return token;
    // if (username === 'admin' && password === 'admin123') {
    //   const token = 'fake-token';
    //   localStorage.setItem('token', token);
    //   return token;
    // }

    throw new Error('Invalid credentials');
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getToken: () => {
    return localStorage.getItem('token');
  },
};