import React from 'react';
import { Text, View, Button } from 'react-native';

export default function ScreenOnne({navigation}){
    const nav = ()=>{
        navigation.navigate('One');
    }
    return (
        <View>
            <Text>Hello I'm Second Screen</Text>
            <Button onPress={nav}
            title="Go to Screen One"
            />
        </View>
    );
}