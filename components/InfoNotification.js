import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

/** Powiadomienie informacyjne, aktualnie różni się od błedu tylko stylem, więc możliwe że w przyszłości zostanie połączone w jedno */

export default function InfoNotification({ VisibilityHandler, message }) {
    return(
        <View style={styles.notificationBox}>
        
            <TouchableOpacity
            onPress={ ()=>{ VisibilityHandler(false) } }
            >
                <Entypo name="cross" size={24} color="black" />
            </TouchableOpacity>

            <Text>{message}</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    notificationBox:{
        height: '15%',
        backgroundColor: 'lightblue',
        padding: 5,
        margin: 2,
        borderRadius: 5,
    },
});
