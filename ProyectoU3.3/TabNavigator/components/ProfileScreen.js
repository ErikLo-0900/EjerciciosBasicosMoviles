// components/ProfileScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray' }}>
            <Text>Profile Screen</Text>
            <Button
                title="Go to Profile Details"
                color='orange'
                onPress={() => navigation.navigate('ProfileDetails')}
            />
        </View>
    );
}