import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions} from "react-native";
import {Menu, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';

const {width, height} = Dimensions.get("window");


export default function Select({changeHandler, placeholder, text, options, src, color}) {

    return (

          <Menu>
            
            <MenuTrigger style={[styles.selectBox, selectColor[color]]}>
                <Image source={src} style={styles.Icons}/>
                <Text style={[styles.selectText, text ? null : styles.placeholder]}>{ text ? text : placeholder }</Text>
            </MenuTrigger>
            

            <MenuOptions optionsContainerStyle={styles.options}>

              <Text style={[styles.headerOptionWrapper, styles.headerOptionText]}>{text ? text : placeholder}</Text>

                <ScrollView>
              {              
              options && options.map((item) => {
                return (
  
                 <TouchableOpacity
                 key={item.id} 
                 >
                 <MenuOption 
                 

                 onSelect={() => {
                    changeHandler(item.name, item.value);
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


  /**
 * Select do wybrania kategorii po jakiej tworzony będzie raport
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Selects
 * 
 */
  export const CategorySelect = ({changeHandler, options, placeholder, text}) => {
    return (
      <Select 
        changeHandler={changeHandler}
        placeholder={ placeholder ? placeholder : "Kategoria"}
        options={options}
        color="blue"
        src={require("../assets/raportPage/iconBudynek.png")}
        />
    );
  }

    export const CategorySelectEdit = ({changeHandler, options, placeholder, text}) => {
      return (
        <Select 
          changeHandler={changeHandler}
          placeholder={ placeholder ? placeholder : "Kategoria"}
          options={options}
          text={text}
          color="yellow"
          src={require("../assets/raportPage/iconBudynek.png")}
          />
      );
    }

  /**
 * Select do wybrania budynku z którego będzie sporzandzany raport
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Selects
 * 
 */
  export const BuildingSelect = ({changeHandler, options, placeholder, text}) => {
    return (
      <Select 
        changeHandler={changeHandler}
        placeholder={ placeholder ? placeholder : "Budynek"}
        options={options}
        text={text}
        color="blue"
        src={require("../assets/raportPage/iconBudynek.png")}
        />
    );
  }

  /**
 * Select do wybrania piętra z którego będzie sporzandzany raport
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Selects
 * 
 */
  export const FloorSelect = ({changeHandler, options, placeholder, text}) => {
    return (
      <Select 
        changeHandler={changeHandler}
        placeholder={ placeholder ? placeholder : "Pietro"}
        options={options}
        text={text}
        color="blue"
        src={require("../assets/raportPage/iconPietro.png")}
        />
    );
  }

  /**
 * Select do wybrania pokoju z którego będzie sporzandzany raport
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Selects
 * 
 */
  export const RoomSelect = ({changeHandler, options, placeholder, text}) => {
    return (
      <Select 
        changeHandler={changeHandler}
        placeholder={ placeholder ? placeholder : "Pokój"}
        options={options}
        text={text}
        color="blue"
        src={require("../assets/raportPage/iconPokoj.png")}
        />
    );
  }

  /**
 * Select do wybrania według czego zostanie sporządzony raport
 * -kategorii
 * -budynku
 * -piętra
 * -pokoju
 * 
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Selects
 * 
 */
   export const ReportSelect = ({changeHandler, options, placeholder, text}) => {
    return (
      <Select 
        changeHandler={changeHandler}
        placeholder={ placeholder ? placeholder : "Według"}
        options={options}
        text={text}
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
    placeholder:{
      color: "rgba(0,0,0,0.4)"
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
  
  