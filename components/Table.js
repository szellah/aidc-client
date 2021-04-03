import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Table( {rows} ){
    return (
        /** Tablica została tak zrobiona by mogła zostać wywołana z dowolnym obiektem typu [{key, fields: []}], czyli tablicą obiektów o kluczu (zazwyczaj id) i polach wyspecyfikowanych w zapytaniu, obróbka danych odbywać się powinna po stronie serwera*/
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