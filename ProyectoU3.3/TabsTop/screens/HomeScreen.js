import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>¡Bienvenido a la Home!</Text>

            <Image
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#83c1f8ff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    }, image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },

});