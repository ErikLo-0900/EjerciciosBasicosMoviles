import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>¡Bienvenido!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Products')}>
                <Text style={styles.buttonText}>Ver Productos</Text>
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
        color: 'coral',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'coral',
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