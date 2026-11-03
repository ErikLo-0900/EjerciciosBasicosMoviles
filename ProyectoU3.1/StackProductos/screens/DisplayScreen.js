import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function DisplayScreen({ navigation, sharedValue, setSharedValue }) {
    // Estado local para el input de esta pantalla (solución al reto)
    const [newValue, setNewValue] = useState(sharedValue);

    const handleUpdate = () => {
        if (!newValue.trim()) {
            Alert.alert('Error', 'El valor no puede estar vacío.');
            return;
        }
        setSharedValue(newValue);
        Alert.alert('Éxito', '¡Valor global actualizado desde la Pantalla 2!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Valor Global Centralizado:</Text>

            <View style={styles.displayBox}>
                <Text style={styles.displayText}>{sharedValue}</Text>
            </View>

            <Text style={styles.label}>Nuevo Valor a Guardar:</Text>
            <TextInput
                style={styles.input}
                placeholder="Actualiza desde aquí..."
                value={newValue}
                onChangeText={setNewValue}
            />

            <TouchableOpacity style={styles.saveButton} onPress={handleUpdate}>
                <Text style={styles.buttonText}>Actualizar y Guardar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Change')}>
                <Text style={styles.backButtonText}>Volver a Pantalla de Entrada</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 25, backgroundColor: '#f0f4f7' },
    header: { fontSize: 18, fontWeight: '600', color: '#333', marginBottom: 10, textAlign: 'center' },
    displayBox: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FF9500',
        marginBottom: 20,
        elevation: 5,
    },
    displayText: { fontSize: 22, fontWeight: 'bold', color: '#D50000', textAlign: 'center' },
    label: { fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 10 },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: '#28A745',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
        elevation: 3,
    },
    backButton: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#007AFF',
    },
    buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
    backButtonText: { color: '#007AFF', fontSize: 16, fontWeight: 'bold' },
});