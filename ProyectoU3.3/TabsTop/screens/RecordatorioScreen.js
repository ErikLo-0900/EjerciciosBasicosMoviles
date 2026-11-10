import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function RecordatorioScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Recordatorios de actividades </Text>

            <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPCKLJUSLv7W_41scHp2wsZ5HNLQuI-DSTtIWv1QLT5Q&s=10' }}
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
        backgroundColor: '#fefc95ff'
    },
    text: {
        fontSize: 24,
    }, image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },

});