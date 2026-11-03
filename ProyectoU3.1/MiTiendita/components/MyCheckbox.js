import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MyCheckbox({ isChecked, onPress }) {
    return (
        <Pressable
            style={[styles.checkboxBase, isChecked && styles.checkboxChecked]}
            onPress={onPress}
        >
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
        borderColor: 'coral',
        backgroundColor: 'transparent',
    },
    checkboxChecked: {
        backgroundColor: 'coral',
    },
});