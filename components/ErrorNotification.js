import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function ErrorNotification({ VisibilityHandler, message }) {
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
        backgroundColor: 'tomato',
        padding: 5,
        margin: 2,
        borderRadius: 5,
    },
});
