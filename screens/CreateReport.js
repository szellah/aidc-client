import React, {useState} from "react";
import { ImageBackground, Text , View} from "react-native";
import {CreateButton} from "../components/Buttons"
import {Tray} from '../components/Trays'
import {BuildingSelect, FloorSelect, RoomSelect, CategorySelect, ReportSelect} from "../components/Selects";
import {MenuProvider} from 'react-native-popup-menu';


const kliknij = (text) => {
    console.log(text);
}



export default function Test({navigation}){

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
        <ImageBackground source={require('../assets/tlo_raport.png')} style={{flex: 1}}>




<Tray composition='loose' spread='center'>
            <Text>RAPORT</Text>
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


    <View style={{flex:1, flexDirection:'column', justifyContent: 'flex-end'}}>
        <Tray composition='loose' spread='center'>
            <CreateButton/>
        </Tray>
        </View>
        </MenuProvider>
        </ImageBackground>
    )
}