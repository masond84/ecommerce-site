import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService, LoginCredentials, RegisterData } from '../services/auth.service';
import { useAuthStore } from '../store/useAuthStore';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login: setUser, logout: clearUser } = useAuthStore();

  const handleLogin = async (credentials: LoginCredentials) => {
    try {
      setLoading(true);
      setError(null);
      const data = await authService.login(credentials);
      setUser(data.user);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (data: RegisterData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await authService.register(data);
      setUser(response.user);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    authService.logout();
    clearUser();
    navigate('/login');
  };

  return {
    loading,
    error,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
  };
};