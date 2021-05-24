import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions} from "react-native";
import {Menu, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';

const {width, height} = Dimensions.get("window");


export default function Select({changeHandler, placeholder, options, src, color}) {

    const [selectText, setSelectText] = useState(placeholder);
  
    return (

          <Menu>
            
            <MenuTrigger style={[styles.selectBox, selectColor[color]]}>
                <Image source={src} style={styles.Icons}/>
                <Text style={styles.selectText}>{selectText}</Text>
            </MenuTrigger>
            

            <MenuOptions optionsContainerStyle={styles.options}>

              <Text style={[styles.headerOptionWrapper, styles.headerOptionText]}>{selectText}</Text>

                <ScrollView>
              {options.map((item) => {
                return (
  
                 <TouchableOpacity
                 key={item.id} 
                 >
                 <MenuOption 
                 

                 onSelect={() => {
                    setSelectText(item.name);
                    changeHandler(item.value);
                  }}

                  customStyles={
                    {
                      optionWrapper: [styles.optionWrapper, optionColor[item.id % 2] ], 
                      optionText: styles.optionText
                  }}   

                  text={item.name}
                 />
                 </TouchableOpacity>
  
                );
              })}
            </ScrollView>
  
            </MenuOptions>
          </Menu>

    );
  }

  export const CategorySelect = ({changeHandler, options}) => {
    return (
      <Select 
        changeHandler={changeHandler}
        placeholder="Kategoria"
        options={options}
        color="blue"
        src={require("../assets/raportPage/iconBudynek.png")}
        />
    );
  }

  export const BuildingSelect = ({changeHandler, options}) => {
    return (
      <Select 
        changeHandler={changeHandler}
        placeholder="Budynek"
        options={options}
        color="blue"
        src={require("../assets/raportPage/iconBudynek.png")}
        />
    );
  }

  export const FloorSelect = ({changeHandler, options}) => {
    return (
      <Select 
        changeHandler={changeHandler}
        placeholder="Piętro"
        options={options}
        color="blue"
        src={require("../assets/raportPage/iconPietro.png")}
        />
    );
  }

  export const RoomSelect = ({changeHandler, options}) => {
    return (
      <Select 
        changeHandler={changeHandler}
        placeholder="Pokój"
        options={options}
        color="blue"
        src={require("../assets/raportPage/iconPokoj.png")}
        />
    );
  }

  export const ReportSelect = ({changeHandler, options}) => {
    return (
      <Select 
        changeHandler={changeHandler}
        placeholder="Według"
        options={options}
        color="yellow"
        src={require("../assets/raportPage/iconSporzRaportu.png")}
        />
    );
  }
  
  
  

  const styles = StyleSheet.create({
      selectLiner: {

    },
    selectBox: {
      marginTop: 0,
      width: width * 0.86,
      marginHorizontal: width * 0.07,
      marginTop: height * 0.02,
      marginBottom: height * 0.02,
      flexDirection: "row",
      borderRadius: 28,
    },
    selectText: {
      color: "#faf3ea",
      flex: 1,
      width: "100%",
      fontSize: 22,
      paddingLeft: '5%',
      textAlignVertical: 'center',
    },    
    Icons: {
      margin: 5,
      width: 40,
      height: 40,
      resizeMode: "contain",
    },
    options: {
      marginTop: -(38+height * 0.04),
      marginLeft: '20%',
      backgroundColor: "#e4e4e4", 
      padding: 5,
      paddingBottom: 10,
      borderRadius: 20,
    },
    headerOptionWrapper: {
        margin: 7,
        paddingLeft: 10,
    },
    headerOptionText: {
        fontSize: 22, 
        color: "white"
    },
    optionWrapper: {
        paddingVertical: 2,
        marginVertical: 0.5,
        paddingHorizontal: 20,
    }, 
    optionText: {
        fontSize: 19, 
        color: "white"
    },
    optionDark: {
        backgroundColor: '#d1d5d7',
    },
    optionLight: {
        backgroundColor: '#d8dada',
    },
    selectBlue: {
        backgroundColor: '#8fa5be',
    },
    selectYellow:{
        backgroundColor: '#ffc06f',
    }
  });
  
  
  const optionColor = [ styles.optionLight, styles.optionDark];
  const selectColor = {blue: styles.selectBlue, yellow: styles.selectYellow};
  
  