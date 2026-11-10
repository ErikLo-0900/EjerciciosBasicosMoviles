import React from "react";
import { View, Text, StyleSheet } from "react-native"

export default function NavigateScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Navigate Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fd5a5a',
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});