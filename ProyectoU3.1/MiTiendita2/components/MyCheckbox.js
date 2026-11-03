import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Componente personalizado: una casilla que se marca y desmarca
// isChecked -> true/false (si esta marcada o no)
// onPress   -> funcion que se ejecuta al presionarla
export default function MyCheckbox({ isChecked, onPress }) {
    return (
        <Pressable
            style={[styles.checkboxBase, isChecked && styles.checkboxChecked]}
            onPress={onPress}>
            {isChecked && <Ionicons name="checkmark" size={24} color="white" />}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#d6336c',
        backgroundColor: 'transparent',
    },
    checkboxChecked: {
        backgroundColor: '#d6336c',
    },
});