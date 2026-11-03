import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function ChangeScreen({ navigation, sharedValue, setSharedValue }) {
    const [newValue, setNewValue] = useState(sharedValue);

    const handleSaveAndGo = () => {
        if (!newValue.trim()) {
            Alert.alert('Error', 'El valor no puede estar vacío.');
            return;
        }

        setSharedValue(newValue);
        Alert.alert('Guardado', 'Variable global actualizada. ¡Navegando a la pantalla 2!');
        navigation.navigate('Display');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Valor Actual Global:</Text>
            <Text style={styles.currentValue}>{sharedValue}</Text>

            <Text style={styles.label}>Nuevo Valor a Guardar:</Text>
            <TextInput
                style={styles.input}
                placeholder="Escribe el nuevo valor aquí..."
                value={newValue}
                onChangeText={setNewValue}
            />

            <TouchableOpacity style={styles.button} onPress={handleSaveAndGo}>
                <Text style={styles.buttonText}>Guardar y Ver Cambio</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 25, backgroundColor: '#f0f4f7' },
    header: { fontSize: 18, fontWeight: '600', color: '#666', marginBottom: 5 },
    currentValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007AFF',
        marginBottom: 30,
        padding: 10,
        backgroundColor: '#E0F7FA',
        borderRadius: 5,
    },
    label: { fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 10 },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 30,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#28A745',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        elevation: 3,
    },
    buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});