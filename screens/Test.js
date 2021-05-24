import React, {useState} from "react";
import { ImageBackground } from "react-native";
import {LogoutButton} from "../components/Buttons"
import {Tray} from '../components/Trays'
import {LocationButton, UsersButton, SettingsButton, PackageButton} from '../components/RoundButtons'
import {ArticleCodeInput} from '../components/Inputs';
import Select from "../components/Selects";
import {MenuProvider} from 'react-native-popup-menu';


const kliknij = (text) => {
    console.log(text);
}



export default function Test({navigation}){

    const [buildingId, setBuildingId] = useState('100');

    const options = [
        {name: 'budynek 1', value: '111', id:1},
        {name: 'budynek 2', value: '112', id:2},
        {name: 'budynek 3', value: '113', id:3},
        {name: 'budynek 3', value: '113', id:4},
        {name: 'budynek 3', value: '113', id:5}
      ];

    return(
        <ImageBackground source={require('../assets/tlo_dodawanie.png')} style={{flex: 1}}>



        <MenuProvider>




        <Select 
        changeHandler={setBuildingId}
        placeholder="Budynek"
        options={options}
        color="blue"
        src={require("../assets/raportPage/iconBudynek.png")}
        />

        <Select 
        changeHandler={setBuildingId}
        placeholder="Budynek"
        options={options}
        color="blue"
        src={require("../assets/raportPage/iconBudynek.png")}
        />
        <Select 
        changeHandler={setBuildingId}
        placeholder="Budynek"
        options={options}
        color="blue"
        src={require("../assets/raportPage/iconBudynek.png")}
        />
        <Select 
        changeHandler={setBuildingId}
        placeholder="Budynek"
        options={options}
        color="blue"
        src={require("../assets/raportPage/iconBudynek.png")}
        />
        <Select 
        changeHandler={setBuildingId}
        placeholder="Budynek"
        options={options}
        color="blue"
        src={require("../assets/raportPage/iconBudynek.png")}
        />
        <Select 
        changeHandler={setBuildingId}
        placeholder="Budynek"
        options={options}
        color="blue"
        src={require("../assets/raportPage/iconBudynek.png")}
        />


        </MenuProvider>
        </ImageBackground>
    )
}