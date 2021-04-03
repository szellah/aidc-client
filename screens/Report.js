import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import Table from '../components/Table';


export default function Report({route, navigation}){

    const { id } = route.params;
    const [message, setMessage] = useState('Tu pojawi się wiadomość');
    const { getAccountInfo } = require('../clientRequests/Creq_getAccountInfo');

    
    const osoba = {id: 1, name: 'yoshi'};


    const [rows, setRows] = useState([]);


    useEffect(() => {
        getAccountInfo(id)
        .then((resolve) => {
            setRows(resolve);
        })
    }, []);



    

    return (
        <View>
             { rows && <Table rows={rows} />}
        </View>
    );
}