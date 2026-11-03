import React, { useState } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const products = [
    { id: '1', name: 'Producto 1', image: 'https://via.placeholder.com/150', price: 100 },
    { id: '2', name: 'Producto 2', image: 'https://via.placeholder.com/150', price: 200 },
    { id: '3', name: 'Producto 3', image: 'https://via.placeholder.com/150', price: 300 },
];

export default function ProductsScreen({ navigation }) {
    const [selectedProducts, setSelectedProducts] = useState([]);

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

    const updateQuantity = (product, quantity) => {
        setSelectedProducts((prevSelected) =>
            prevSelected.map((item) =>
                item.id === product.id ? { ...item, quantity: quantity } : item
            )
        );
    };

    const goToOrderReview = () => {
        navigation.navigate('OrderReview', { selectedProducts });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    const isSelected = selectedProducts.find((product) => product.id === item.id);
                    return (
                        <TouchableOpacity onPress={() => toggleProduct(item)}>
                            <View style={[styles.productContainer, isSelected && styles.selected]}>
                                <Image source={{ uri: item.image }} style={styles.productImage} />
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.price}>${item.price}</Text>
                                {isSelected && (
                                    <View style={styles.quantityContainer}>
                                        <Button
                                            title="-"
                                            onPress={() => updateQuantity(item, isSelected.quantity > 1 ? isSelected.quantity - 1 : 1)}
                                        />
                                        <Text style={styles.quantityText}>{isSelected.quantity}</Text>
                                        <Button
                                            title="+"
                                            onPress={() => updateQuantity(item, isSelected.quantity + 1)}
                                        />
                                    </View>
                                )}
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
            <Button
                title="Revisar Pedido"
                onPress={goToOrderReview}
                disabled={selectedProducts.length === 0}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    productContainer: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        alignItems: 'center',
    },
    selected: {
        backgroundColor: '#d8f8d8',
    },
    productImage: {
        width: 150,
        height: 150,
        borderRadius: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    price: {
        fontSize: 16,
        color: 'gray',
        marginTop: 4,
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