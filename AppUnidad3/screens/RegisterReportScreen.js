import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';
import MyCheckbox from '../components/MyCheckbox';
import { useReports } from '../context/ReportContext';

export default function RegisterReportScreen({ navigation }) {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [urgente, setUrgente] = useState(false);

    const { agregarReporte } = useReports();

    const handleGuardar = () => {
        if (!titulo.trim() || !descripcion.trim()) {
            Alert.alert('Error', 'Por favor llena todos los campos.');
            return;
        }

        const nuevoReporte = {
            id: Date.now().toString(),
            titulo: titulo.trim(),
            descripcion: descripcion.trim(),
            urgente: urgente,
            estado: 'Pendiente',
        };

        agregarReporte(nuevoReporte);

        setTitulo('');
        setDescripcion('');
        setUrgente(false);

        Alert.alert('Éxito', 'Reporte registrado correctamente.', [
            {
                text: 'Ver en Historial',
                onPress: () => navigation.navigate('Historial'),
            },
        ]);
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <View style={styles.headerBox}>
                <Text style={styles.headerTitle}>Nuevo Reporte</Text>
                <Text style={styles.headerSubtitle}>Registra incidencias o solicitudes para su pronta atención.</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.inputGroup}>
                    <View style={styles.labelRow}>
                        <Ionicons name="bookmark-outline" size={18} color="#059669" />
                        <Text style={styles.label}>Título de la Incidencia</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Ej. Fuga de agua en Av. Principal"
                        placeholderTextColor="#9ca3af"
                        value={titulo}
                        onChangeText={setTitulo}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <View style={styles.labelRow}>
                        <Ionicons name="document-text-outline" size={18} color="#059669" />
                        <Text style={styles.label}>Descripción Detallada</Text>
                    </View>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Describe el problema, ubicación exacta o referencias..."
                        placeholderTextColor="#9ca3af"
                        multiline
                        numberOfLines={4}
                        value={descripcion}
                        onChangeText={setDescripcion}
                    />
                </View>

                <View style={styles.checkboxContainer}>
                    <MyCheckbox isChecked={urgente} onPress={() => setUrgente(!urgente)} />
                    <View style={{ marginLeft: 12 }}>
                        <Text style={styles.checkboxLabel}>Marcar como caso prioritario</Text>
                        <Text style={styles.checkboxSubtext}>Activa esta opción solo si requiere atención inmediata.</Text>
                    </View>
                </View>

                <CustomButton title="Guardar Reporte" onPress={handleGuardar} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    scrollContent: {
        padding: 20,
    },
    headerBox: {
        marginBottom: 16,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#111827',
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#6b7280',
        marginTop: 4,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    inputGroup: {
        marginBottom: 18,
    },
    labelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        gap: 6,
    },
    label: {
        fontSize: 15,
        fontWeight: '600',
        color: '#374151',
    },
    input: {
        backgroundColor: '#f8fafc',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 15,
        color: '#1f2937',
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9fafb',
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#f3f4f6',
        marginBottom: 20,
    },
    checkboxLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1f2937',
    },
    checkboxSubtext: {
        fontSize: 12,
        color: '#6b7280',
        marginTop: 2,
    },
});