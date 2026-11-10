import React from "react";
import { View, Text, StyleSheet } from "react-native"

export default function LenguajeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Lenguaje Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', backgroundColor: '#ead9fcff',
        backgroundColor: '#454545ff',

    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});