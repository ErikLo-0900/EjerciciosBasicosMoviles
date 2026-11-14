// context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [usuario, setUsuario] = useState(null);

    // Función para iniciar sesión (puedes cambiar las credenciales de prueba)
    const login = (correo, password) => {
        if (correo.trim() && password.trim()) {
            setUsuario({ correo });
            setIsLoggedIn(true);
            return { success: true };
        }
        return { success: false, message: 'Por favor completa todos los campos' };
    };

    // Función para cerrar sesión
    const logout = () => {
        setIsLoggedIn(false);
        setUsuario(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);