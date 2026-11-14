// screens/LoginScreen.js
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen() {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [mostrarPassword, setMostrarPassword] = useState(false);

    const { login } = useAuth();

    const handleIngresar = () => {
        const res = login(correo, password);
        if (!res.success) {
            Alert.alert('Atención', res.message);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.card}>
                {/* Ícono de cabecera */}
                <View style={styles.iconCircle}>
                    <Ionicons name="shield-checkmark" size={42} color="#059669" />
                </View>

                <Text style={styles.title}>¡Bienvenido!</Text>
                <Text style={styles.subtitle}>Inicia sesión en AppComunitaria</Text>

                {/* Campo de Correo / Usuario */}
                <View style={styles.inputContainer}>
                    <Ionicons name="mail-outline" size={20} color="#6b7280" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Usuario o correo"
                        placeholderTextColor="#9ca3af"
                        value={correo}
                        onChangeText={setCorreo}
                        autoCapitalize="none"
                    />
                </View>

                {/* Campo de Contraseña con botón de mostrar/ocultar */}
                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed-outline" size={20} color="#6b7280" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        placeholderTextColor="#9ca3af"
                        secureTextEntry={!mostrarPassword}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => setMostrarPassword(!mostrarPassword)}>
                        <Ionicons
                            name={mostrarPassword ? 'eye-off-outline' : 'eye-outline'}
                            size={20}
                            color="#6b7280"
                        />
                    </TouchableOpacity>
                </View>

                {/* Botón de Ingreso */}
                <TouchableOpacity style={styles.button} onPress={handleIngresar}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                    <Ionicons name="arrow-forward" size={18} color="#ffffff" style={{ marginLeft: 8 }} />
                </TouchableOpacity>

                <Text style={styles.hintText}>Pista: ingresa cualquier usuario y contraseña para probar</Text>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#059669', // Fondo verde esmeralda
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        width: '100%',
        maxWidth: 380,
        backgroundColor: '#ffffff',
        borderRadius: 24,
        padding: 28,
        alignItems: 'center',
        elevation: 8,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 4 },
    },
    iconCircle: {
        width: 76,
        height: 76,
        borderRadius: 38,
        backgroundColor: '#d1fae5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1f2937',
    },
    subtitle: {
        fontSize: 14,
        color: '#6b7280',
        marginBottom: 24,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8fafc',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 12,
        paddingHorizontal: 14,
        marginBottom: 16,
        width: '100%',
        height: 50,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: '#1f2937',
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#059669',
        width: '100%',
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        elevation: 2,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    hintText: {
        marginTop: 18,
        fontSize: 12,
        color: '#9ca3af',
        textAlign: 'center',
    },
});