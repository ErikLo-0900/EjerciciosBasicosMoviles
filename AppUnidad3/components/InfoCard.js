import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InfoCard({ title, description, icon = 'information-circle-outline' }) {
    return (
        <View style={styles.card}>
            <View style={styles.iconContainer}>
                <Ionicons name={icon} size={24} color="#059669" />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 16,
        marginVertical: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        borderLeftWidth: 5,
        borderLeftColor: '#059669', // Acento esmeralda a la izquierda
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        alignItems: 'center',
    },
    iconContainer: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#d1fae5',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#4b5563',
        lineHeight: 20,
    },
});