import React, {useState} from "react";
import { ImageBackground, Text , View} from "react-native";
import {CreateButton} from "../../components/Buttons"
import {Tray} from '../../components/Trays'
import {Container} from '../../components/Containers'
import {BuildingSelect, FloorSelect, RoomSelect, CategorySelect, ReportSelect} from "../../components/Selects";
import {MenuProvider} from 'react-native-popup-menu';


const kliknij = (text) => {
    console.log(text);
}


/**
 * Ekran Kreatora Raportów<br>
 * Pozwala na wybranie jednego ze sposobów według których
 * może zostac sporzadzony raport. W zależności od wyboru wyświetli
 * odpowiednie listy wyboru z których będzie można wybrać odpowiadajce
 * nam parametry do Raportu.
 * Po naciśnięciu `Sporządź` otworzy się nowy Ekran zawierający gotowy raport.
 * @function CreateReport
 * @param {object} navigation
 * Umożliwia przenoszenie się między ekranami
 * @category Screens
 * @returns {JSX}
 * Zwraca ekran kreatora raportów w postaci elementu JSX
 */
export default function CreateReport({navigation}){

    const [reportId, setReportId] = useState(0);

    const reportOptions = [
        {name: 'kategoria', value: 1, id: 1 },
        {name: 'budynek', value: 2, id: 2 },
        {name: 'piętro', value: 3, id: 3 },
        {name: 'pokój', value: 4, id: 4 }
      ];

    const [categoryId, setCategoryId] = useState('1');

    const categoryOptions = [
        {name: 'monitor', value: '111', id:1},
        {name: 'myszka', value: '112', id:2},
        {name: 'drukarka', value: '111', id:3},
        {name: 'klawiatura', value: '112', id:4},
        {name: 'jednostka centralna', value: '112', id:5},
    ];

    const [buildingId, setBuildingId] = useState('1');

    const buildingOptions = [
        {name: 'budynek 1', value: '1', id:1},
        {name: 'budynek 2', value: '2', id:2},
      ];

    const [floorId, setFloorId] = useState('0');

    const floorgOptions = [
        {name: 'parter', value: '0', id:1},
        {name: 'piętro 1', value: '1', id:2},
    ];
    
    const [roomId, setRoomId] = useState('100');

    const roomOptions = [
        {name: 'pokój 111', value: '111', id:1},
        {name: 'pokój 112', value: '112', id:2},
    ];


    return(
        <ImageBackground source={require('../../assets/tlo_raport.png')} style={{flex: 1}}>



<Container composition='compact' spread='top'>
        <Tray composition='loose' spread='center'>
            <Text style={{fontSize: 40, color: 'white', marginBottom: '17%'}}>RAPORT</Text>
        </Tray>
        <MenuProvider>

        <ReportSelect
        changeHandler={setReportId}
        options={reportOptions}
        />

        {reportId>=2&&<BuildingSelect
        changeHandler={setBuildingId}
        options={buildingOptions}
        />}

        {reportId>=3&&<FloorSelect
        changeHandler={setFloorId}
        options={floorgOptions}
        />}

        {reportId>=4&&<RoomSelect
        changeHandler={setRoomId}
        options={roomOptions}
        />}

        {reportId == 1&&<CategorySelect
        changeHandler={setCategoryId}
        options={categoryOptions}
        />}


    <Container composition='loose' spread='bottom'>
            <Tray composition='loose' spread='center'>
                <CreateButton
                pressHandler={() => {navigation.navigate('Raport')}}
                />
            </Tray>
    </Container>
    </MenuProvider>
 </Container>
        
        </ImageBackground>
    )
}