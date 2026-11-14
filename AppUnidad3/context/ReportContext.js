// context/ReportContext.js
import React, { createContext, useState, useContext } from 'react';

const ReportContext = createContext();

export const ReportProvider = ({ children }) => {
    // Lista inicial de reportes
    const [reportes, setReportes] = useState([
        { id: '1', titulo: 'Fuga de agua', descripcion: 'Calle 5ta', urgente: false, estado: 'Pendiente' },
        { id: '2', titulo: 'Alumbrado público fundido', descripcion: 'Frente al parque', urgente: true, estado: 'En proceso' },
        { id: '3', titulo: 'Bache profundo', descripcion: 'Avenida Juárez', urgente: false, estado: 'Resuelto' },
    ]);

    // Función para agregar un nuevo reporte al inicio de la lista
    const agregarReporte = (nuevoReporte) => {
        setReportes((prev) => [nuevoReporte, ...prev]);
    };

    return (
        <ReportContext.Provider value={{ reportes, agregarReporte }}>
            {children}
        </ReportContext.Provider>
    );
};

// Hook personalizado para usar el contexto fácilmente
export const useReports = () => useContext(ReportContext);