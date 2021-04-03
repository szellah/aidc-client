import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Table( {rows} ){
    return (
        <View>
            {rows.map(({key, fields}) => (
                 <View style={styles.row} key={key}>{fields.map((field) => <Text>{field}</Text>)}</View>
             ))}
        </View>
    )
}

const styles = new StyleSheet.create({
    row: {
        backgroundColor: 'coral',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});