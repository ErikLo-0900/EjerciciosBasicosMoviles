import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useReports } from '../context/ReportContext';

export default function ReportListScreen() {
    const { reportes } = useReports();

    const getEstadoBadgeStyle = (estado) => {
        switch (estado) {
            case 'Resuelto':
                return { bg: '#dcfce7', text: '#15803d', icon: 'checkmark-circle-outline' };
            case 'En proceso':
                return { bg: '#dbeafe', text: '#1d4ed8', icon: 'sync-outline' };
            default:
                return { bg: '#fef3c7', text: '#b45309', icon: 'time-outline' };
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <Text style={styles.headerTitle}>Historial de Reportes</Text>
                <Text style={styles.headerSubtitle}>
                    {reportes.length} {reportes.length === 1 ? 'incidencia registrada' : 'incidencias registradas'}
                </Text>
            </View>

            <FlatList
                data={reportes}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Ionicons name="folder-open-outline" size={48} color="#9ca3af" />
                        <Text style={styles.emptyText}>No hay reportes registrados aún.</Text>
                        <Text style={styles.emptySubtext}>Los reportes que guardes aparecerán aquí.</Text>
                    </View>
                }
                renderItem={({ item }) => {
                    const statusInfo = getEstadoBadgeStyle(item.estado);
                    return (
                        <View style={styles.itemContainer}>
                            <View style={styles.itemHeader}>
                                <Text style={styles.itemTitle}>{item.titulo}</Text>
                                {item.urgente && (
                                    <View style={styles.badgeUrgenteContainer}>
                                        <Ionicons name="flame" size={12} color="#ffffff" />
                                        <Text style={styles.badgeUrgente}>Urgente</Text>
                                    </View>
                                )}
                            </View>

                            {item.descripcion ? (
                                <Text style={styles.itemDesc}>{item.descripcion}</Text>
                            ) : null}

                            <View style={styles.footerRow}>
                                <View style={[styles.statusBadge, { backgroundColor: statusInfo.bg }]}>
                                    <Ionicons name={statusInfo.icon} size={14} color={statusInfo.text} style={{ marginRight: 4 }} />
                                    <Text style={[styles.statusText, { color: statusInfo.text }]}>
                                        {item.estado}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8fafc',
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
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 60,
    },
    emptyText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#4b5563',
        marginTop: 12,
    },
    emptySubtext: {
        fontSize: 13,
        color: '#9ca3af',
        marginTop: 4,
    },
    itemContainer: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1f2937',
        flex: 1,
        marginRight: 8,
    },
    badgeUrgenteContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ef4444',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 8,
    },
    badgeUrgente: {
        color: '#ffffff',
        fontSize: 11,
        fontWeight: 'bold',
        marginLeft: 3,
    },
    itemDesc: {
        fontSize: 14,
        color: '#4b5563',
        marginTop: 6,
        lineHeight: 20,
    },
    footerRow: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusText: {
        fontSize: 12,
        fontWeight: '600',
    },
});