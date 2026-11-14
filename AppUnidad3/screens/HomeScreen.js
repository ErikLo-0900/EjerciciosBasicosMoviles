import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InfoCard from '../components/InfoCard';

const fondoImage = require('../assets/Fondo2.jpg');

export default function HomeScreen() {
    return (
        <ImageBackground source={fondoImage} style={styles.backgroundImage}>
            <View style={styles.overlay}>
                <View style={styles.headerCard}>
                    <View style={styles.badge}>
                        <Ionicons name="sparkles" size={16} color="#059669" />
                        <Text style={styles.badgeText}>Portal de Servicios</Text>
                    </View>
                    <Text style={styles.header}>Bienvenido a AppComunitaria</Text>
                    <Text style={styles.subtitle}>Tu espacio de participación y mejora continua para nuestra comunidad.</Text>
                </View>

                <View style={styles.cardsContainer}>
                    <InfoCard
                        icon="shield-checkmark-outline"
                        title="Gestión Eficiente"
                        description="Plataforma diseñada para registrar y dar seguimiento a reportes y solicitudes de la comunidad."
                    />
                    <InfoCard
                        icon="navigate-outline"
                        title="Navegación Avanzada"
                        description="Utiliza el menú lateral y las pestañas inferiores para moverte con fluidez entre módulos."
                    />
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(15, 23, 42, 0.45)', // Sutil filtro que asegura legibilidad perfecta
        padding: 20,
        justifyContent: 'center',
    },
    headerCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: 22,
        borderRadius: 20,
        marginBottom: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
    },
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#d1fae5',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 20,
        marginBottom: 10,
    },
    badgeText: {
        color: '#065f46',
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginLeft: 6,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#111827',
        textAlign: 'center',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 14,
        color: '#6b7280',
        textAlign: 'center',
        lineHeight: 20,
    },
    cardsContainer: {
        marginTop: 4,
    },
});