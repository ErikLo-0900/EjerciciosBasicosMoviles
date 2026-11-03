import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

export default function OrderReviewScreen({ route, navigation }) {
    // Recibimos los productos y el usuario que mando la ventana anterior
    const { usuario } = route.params;
    const [selectedProducts, setSelectedProducts] = useState(route.params.selectedProducts);

    const updateQuantity = (product, quantity) => {
        setSelectedProducts((prevSelected) =>
            prevSelected.map((item) =>
                item.id === product.id ? { ...item, quantity: quantity } : item
            )
        );
    };

    // Suma el precio por la cantidad de todos los productos
    const total = selectedProducts.reduce((sum, product) => sum + product.price * product.quantity, 0);

    const sendOrder = () => {
        const productDetails = selectedProducts
            .map((product) => `${product.name} (x${product.quantity}) - $${product.price * product.quantity}`)
            .join('\n');
        const orderDetails = `Cliente: ${usuario}\n\nPedido:\n\n${productDetails}\n\nTotal: $${total}`;

        MailComposer.composeAsync({
            recipients: ['23050015@itsn.edu.mx'],
            subject: 'Nuevo Pedido',
            body: orderDetails,
        }).then(() => {
            navigation.navigate('Welcome', { usuario: usuario });
        });
    };

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={selectedProducts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.productContainer}>
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text>${item.price * item.quantity}</Text>
                        <View style={styles.quantityContainer}>
                            <Button
                                title="-"
                                onPress={() => updateQuantity(item, item.quantity > 1 ? item.quantity - 1 : 1)}
                            />
                            <Text style={styles.quantityText}>{item.quantity}</Text>
                            <Button title="+" onPress={() => updateQuantity(item, item.quantity + 1)} />
                        </View>
                    </View>
                )}
            />
            <Text style={styles.total}>Total: ${total}</Text>
            <Button title="Enviar Pedido" onPress={sendOrder} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    list: {
        flex: 1,
    },
    productContainer: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    quantityText: {
        marginHorizontal: 8,
        fontSize: 18,
    },
    total: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 12,
    },
});