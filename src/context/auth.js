import React from 'react';
import { toast } from 'react-hot-toast';

const urlApi = process.env.REACT_APP_API_URL;

const AuthContext = React.createContext({ token: null, user: null });

function useAuthContext() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}

function AuthProvider({ children }) {
  const [token, setToken] = React.useState(() => localStorage.getItem('token'));

  const [user, setUser] = React.useState(() => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  });

  function login(dataForm) {
    fetch(`${urlApi}/auth/signin`, {
      method: 'POST',
      body: JSON.stringify(dataForm),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.status === 404 || data.status === 400) {
          toast.error('Usuario o contraseña incorrectos');
          return;
        }
        const { token, user } = data;
        toast.success(`Bienvenid@ ${user?.username}`);
        setToken(token);
        setUser(user);
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      });

    setUser(user);
  }

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuthContext };
