import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

/**
 * Mock AuthProvider providing authentication state and login/logout methods.
 */
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData = {}) => {
    const defaultUser = {
      name: 'Ramesh Patel',
      email: userData.email || 'farmer@example.com',
      village: 'Mandya, Karnataka',
      role: 'Farmer',
    };
    setUser({ ...defaultUser, ...userData });
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Hook to consume AuthContext.
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
