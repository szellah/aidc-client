import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import Table from '../components/Table';


export default function Report({route, navigation}){

    const { id } = route.params;
    const [message, setMessage] = useState('Tu pojawi się wiadomość');
    const Creq_lib = require('../clientRequests/Creq_lib');

    
    const [rows, setRows] = useState([]);


    /* Funkcja która się odpali tylko przy zmianie danych */
    useEffect(() => {
        Creq_lib.getAccountReport(id)
        .then((resolve) => {
            setRows(resolve);
        })
    }, []);



    

    return (
        /** Renderowanie warunkowe tabeli */
        <View>
             { rows && <Table rows={rows} />}
        </View>
    );
}