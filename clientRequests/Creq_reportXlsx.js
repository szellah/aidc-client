import XLSX from 'xlsx'; //
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

const axios = require('axios');
const { serverURL } = require('./serverInfo');

function Creq_reportXsl(table){
    return new Promise((resolve, reject) => {
            //Tworzenie arkusza
            var sheet = XLSX.utils.json_to_sheet(table);
            var file = XLSX.utils.book_new();
            //Łączenie do jednego skoroszytu
            XLSX.utils.book_append_sheet(file, sheet, "Article");
            //Dopis do skoroszytu
            XLSX.write(wb, {/* Miejsce na tablicę */});
    });
}
