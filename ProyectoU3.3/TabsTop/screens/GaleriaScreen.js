import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function GaleriaScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Galeria de fotos</Text>

            <Image
                source={{ uri: 'https://play-lh.googleusercontent.com/AoJNtxyprOXjmPZdwa1Tj9PnreZzqnNrwVVQgcxiL8c0-yFF2wfqyfmP7ftJSkJy3LamRnFpDUC60GEo0ViFBg' }}
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
        backgroundColor: '#7ffffb'
    },
    text: {
        fontSize: 24,
    },
    image: {
        width: 150,  // Ancho obligatorio
        height: 150, // Alto obligatorio
        resizeMode: 'contain', // Ajusta cómo se escala la imagen ('cover', 'contain', 'stretch')
    },
});