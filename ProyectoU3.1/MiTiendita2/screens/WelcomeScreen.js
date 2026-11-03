import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation, route }) {
    // Recibimos el usuario que mando la ventana de login
    const { usuario } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>¡Bienvenido, {usuario}!</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Products', { usuario: usuario })}>
                <Text style={styles.buttonText}>Ver Pasteles</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#d6336c',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#d6336c',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});