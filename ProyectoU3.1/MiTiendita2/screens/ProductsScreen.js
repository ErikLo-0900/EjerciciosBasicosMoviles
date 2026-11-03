import React, { useState } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Arreglo de objetos que simula los productos de la tienda
const products = [
    { id: '1', name: 'Pastel de Chocolate', image: 'https://picsum.photos/seed/pastel1/150', price: 250 },
    { id: '2', name: 'Pastel de Fresa', image: 'https://picsum.photos/seed/pastel2/150', price: 220 },
    { id: '3', name: 'Cupcakes (6 piezas)', image: 'https://picsum.photos/seed/pastel3/150', price: 120 },
    { id: '4', name: 'Galletas (docena)', image: 'https://picsum.photos/seed/pastel4/150', price: 90 },
];

export default function ProductsScreen({ navigation, route }) {
    const { usuario } = route.params;
    const [selectedProducts, setSelectedProducts] = useState([]);

    // Si el producto ya estaba seleccionado lo quita, si no, lo agrega con cantidad 1
    const toggleProduct = (product) => {
        setSelectedProducts((prevSelected) => {
            const existingProduct = prevSelected.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevSelected.filter((item) => item.id !== product.id);
            } else {
                return [...prevSelected, { ...product, quantity: 1 }];
            }
        });
    };

    // Cambia la cantidad de un producto seleccionado
    const updateQuantity = (product, quantity) => {
        setSelectedProducts((prevSelected) =>
            prevSelected.map((item) =>
                item.id === product.id ? { ...item, quantity: quantity } : item
            )
        );
    };

    // Pasa a la siguiente ventana los productos elegidos y el usuario
    const goToOrderReview = () => {
        navigation.navigate('OrderReview', { selectedProducts, usuario });
    };

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    const isSelected = selectedProducts.find((product) => product.id === item.id);
                    return (
                        <TouchableOpacity onPress={() => toggleProduct(item)}>
                            <View style={[styles.productContainer, isSelected && styles.selected]}>
                                <Image source={{ uri: item.image }} style={styles.productImage} />
                                <Text style={styles.productName}>{item.name}</Text>
                                <Text>${item.price}</Text>
                                {isSelected && (
                                    <View style={styles.quantityContainer}>
                                        <Button
                                            title="-"
                                            onPress={() => updateQuantity(item, isSelected.quantity > 1 ? isSelected.quantity - 1 : 1)}
                                        />
                                        <Text style={styles.quantityText}>{isSelected.quantity}</Text>
                                        <Button title="+" onPress={() => updateQuantity(item, isSelected.quantity + 1)} />
                                    </View>
                                )}
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
            <View style={styles.footer}>
                <Button title="Revisar Pedido" onPress={goToOrderReview} disabled={selectedProducts.length === 0} />
            </View>
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
    footer: {
        paddingTop: 12,
    },
    productContainer: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        alignItems: 'center',
    },
    selected: {
        backgroundColor: '#fcd5e3',
    },
    productImage: {
        width: 150,
        height: 150,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
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
});