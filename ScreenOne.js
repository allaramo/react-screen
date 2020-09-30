import React from 'react';
import { Text, View, Button } from 'react-native';

export default function ScreenOnne({navigation}){
    const nav = ()=>{
        navigation.navigate('Two');
    }
    return (
        <View>
            <Text>Hello</Text>
            <Button onPress={nav}
            title="Go to Screen Two"
            />
        </View>
    );
}