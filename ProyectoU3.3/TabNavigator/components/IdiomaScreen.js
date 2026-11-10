// components/IdiomaScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function IdiomaScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue' }}>
            <Text style={{ fontSize: 30, color: 'blue' }}>Idioma Screen</Text>
            <Button
                title="Cambiar Idioma Stack"
                color="red"
                onPress={() => navigator.navigate('HomeScreen')}
            />
        </View>
    );
}