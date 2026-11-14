import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';

export default function SettingsScreen() {
    const { usuario, logout } = useAuth();

    const handleLogout = () => {
        if (Platform.OS === 'web') {
            const confirmar = window.confirm('¿Estás seguro de que deseas salir?');
            if (confirmar) {
                logout();
            }
        } else {
            Alert.alert('Cerrar Sesión', '¿Estás seguro de que deseas salir?', [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Salir', style: 'destructive', onPress: () => logout() },
            ]);
        }
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <View>
                {/* Tarjeta de Perfil */}
                <View style={styles.profileCard}>
                    <View style={styles.avatarCircle}>
                        <Ionicons name="person" size={38} color="#059669" />
                    </View>
                    <Text style={styles.userName}>{usuario ? usuario.correo : 'Usuario Activo'}</Text>
                    <View style={styles.sessionBadge}>
                        <View style={styles.statusDot} />
                        <Text style={styles.sessionText}>Sesión Activa</Text>
                    </View>
                </View>

                {/* Sección de Preferencias / Datos */}
                <Text style={styles.sectionHeader}>Información de la Aplicación</Text>
                <View style={styles.infoCard}>
                    <View style={styles.infoRow}>
                        <View style={styles.infoLeft}>
                            <Ionicons name="phone-portrait-outline" size={20} color="#4b5563" />
                            <Text style={styles.infoLabel}>Versión</Text>
                        </View>
                        <Text style={styles.infoValue}>1.0.0 (Unidad 3)</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.infoRow}>
                        <View style={styles.infoLeft}>
                            <Ionicons name="shield-checkmark-outline" size={20} color="#4b5563" />
                            <Text style={styles.infoLabel}>Seguridad</Text>
                        </View>
                        <Text style={styles.infoValue}>Autenticado</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.infoRow}>
                        <View style={styles.infoLeft}>
                            <Ionicons name="business-outline" size={20} color="#4b5563" />
                            <Text style={styles.infoLabel}>Módulo</Text>
                        </View>
                        <Text style={styles.infoValue}>Gestión Comunitaria</Text>
                    </View>
                </View>
            </View>

            {/* Botón de Cerrar Sesión */}
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout} activeOpacity={0.8}>
                <Ionicons name="log-out-outline" size={20} color="#dc2626" style={{ marginRight: 8 }} />
                <Text style={styles.logoutText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    scrollContent: {
        padding: 20,
        minHeight: '100%',
        justifyContent: 'space-between',
    },
    profileCard: {
        backgroundColor: '#ffffff',
        padding: 24,
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e5e7eb',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
        marginBottom: 24,
    },
    avatarCircle: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: '#d1fae5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111827',
    },
    sessionBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ecfdf5',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
        marginTop: 8,
    },
    statusDot: {
        width: 7,
        height: 7,
        borderRadius: 4,
        backgroundColor: '#10b981',
        marginRight: 6,
    },
    sessionText: {
        fontSize: 12,
        color: '#065f46',
        fontWeight: '600',
    },
    sectionHeader: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#6b7280',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginBottom: 8,
        marginLeft: 4,
    },
    infoCard: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 14,
    },
    infoLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    infoLabel: {
        fontSize: 15,
        color: '#374151',
        fontWeight: '500',
    },
    infoValue: {
        fontSize: 14,
        color: '#6b7280',
    },
    separator: {
        height: 1,
        backgroundColor: '#f1f5f9',
    },
    logoutButton: {
        flexDirection: 'row',
        backgroundColor: '#fee2e2',
        paddingVertical: 14,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#fecaca',
    },
    logoutText: {
        color: '#dc2626',
        fontWeight: 'bold',
        fontSize: 15,
    },
});