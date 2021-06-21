import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions'; 

/**
 * @function
 * Funkcja zapisująca tablice JSON do pliku CSV.
 * @param {object} fileName - nazwa pliku
 * @param {object} table - tablica JSON która zostanie zmieniona na plik CSV
 */

saveFile = async (fileName, table) => {

    let fileUri = FileSystem.documentDirectory + fileName +".csv";
  
    const converter = require('json-2-csv');
  
    converter.json2csv(table, async (err, csv) => {
      if (err) {
          throw err;
      }
      else{
        await FileSystem.writeAsStringAsync(fileUri, csv, { encoding: FileSystem.EncodingType.UTF8 });
        console.log(fileUri);
        console.log(await FileSystem.readAsStringAsync(fileUri, { encoding: FileSystem.EncodingType.UTF8 }));
      
        const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        if (perm.status != 'granted') {
          return;
        }
  
        try {
          const asset = await MediaLibrary.createAssetAsync(fileUri);
          const album = await MediaLibrary.getAlbumAsync('Download');
          if (album == null) {
            await MediaLibrary.createAlbumAsync('Download', asset, false);
          } else {
            await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
          }
        } catch (e) {
          console.log(e);
        }
      }});
}

module.exports={
    saveFile,
};