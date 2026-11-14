import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MyCheckbox({ isChecked, onPress }) {
    return (
        <Pressable
            style={[styles.checkboxBase, isChecked && styles.checkboxChecked]}
            onPress={onPress}
        >
            {isChecked && <Ionicons name="checkmark" size={16} color="white" />}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    checkboxBase: {
        width: 22,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#9ca3af',
        backgroundColor: '#ffffff',
    },
    checkboxChecked: {
        backgroundColor: '#059669',
        borderColor: '#059669',
    },
});