import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Configuracion de la App</Text>

            <Image
                source={{ uri: 'https://play-lh.googleusercontent.com/fzReYFguXMfIjINuJ4uVF_0YlhJGDzV9yQG0MAN05yk7RD3BZhlPDgwu39wSZ0DAcu_65tdwHUoP1CF0kXtXLQ' }}
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
        backgroundColor: '#446d85ff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },

});