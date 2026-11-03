import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MenuScreen({ navigation, products }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sistema de Gestión de Inventario</Text>
            <Text style={styles.subtitle}>Productos registrados: {products.length}</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={styles.buttonText}>Registrar Producto</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, styles.viewListButton]}
                onPress={() => navigation.navigate('ProductList')}
                disabled={products.length === 0}
            >
                <Text style={styles.buttonText}>Ver Lista ({products.length})</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#f8f8f8' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#333', textAlign: 'center' },
    subtitle: { fontSize: 16, marginBottom: 40, color: '#666' },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        marginBottom: 15,
        elevation: 5,
    },
    viewListButton: { backgroundColor: '#28A745', marginTop: 20 },
    buttonText: { color: '#FFFFFF', fontSize: 18, fontWeight: '600' },
});