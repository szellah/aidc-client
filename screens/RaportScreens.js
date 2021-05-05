// import 'react-native-gesture-handler';
import React, {useState} from "react";
import { Button, Text, View, TextInput, StyleSheet, Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
   TouchableWithoutFeedback, SectionList, FlatList, Image, Dimensions, ImageStore, ImageBackground, TouchableHighlightBase} from "react-native";
import {MenuProvider} from 'react-native-popup-menu';
import {Menu, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';
import { AntDesign } from '@expo/vector-icons'; 
import {PasekNawigacyjny} from "../ProjektAIDC/components/PasekNawigacyjny";


// Wymiary okna
const {width, height} = Dimensions.get("window");

// navigation - obiekt do nawigacji
// route - obiekt do przekazywania danych miedzy ekranami


export function RaportBudynek({navigation, route}) {
  const [budText, setBudText] = useState("budynek");
  return (
    <MenuProvider>
      <ImageBackground source={require("../ProjektAIDC/assets/tlo_raport.png")} style={styles.tlo}>
        <View style={styles.container}>
          <PasekNawigacyjny navigation={navigation}/>
          <Image
            source={require("../ProjektAIDC/assets/raportPage/raportTytul.png")}
            style={styles.raport}
          />
          <View style={styles.wedlugContainer}>
            <Image source={require("../ProjektAIDC/assets/raportPage/iconSporzRaportu.png")} style={styles.Icons}/>
            <Text style={styles.wedlugTekst}>budynek</Text>
          </View>
          <MenuComponentE1 setBudTextCallBack={setBudText} budTextProp={budText}/>
          <View style={styles.sporzadzWrapper}>
            <TouchableOpacity>
              <Image source={require("../ProjektAIDC/assets/raportPage/sporzadzBtn.png")} style={sporzadzBtnStyles.sporzadzBtnBudynek} resizeMode="contain"></Image>
            </TouchableOpacity>
          </View>
        </View> 
      </ImageBackground>
    </MenuProvider>
  );
}


export function RaportKategoria({navigation, route}) {
  const [kategoriaText, setKategoriaText] = useState("kategoria");
  return (
    <MenuProvider>
      <ImageBackground source={require("../ProjektAIDC/assets/tlo_raport.png")} style={styles.tlo}>
        <View style={styles.container}>
          <PasekNawigacyjny navigation={navigation}/>
          <Image
            source={require("../ProjektAIDC/assets/raportPage/raportTytul.png")}
            style={styles.raport}
          />
          <View style={styles.wedlugContainer}>
            <Image source={require("../ProjektAIDC/assets/raportPage/iconSporzRaportu.png")} style={styles.Icons}/>
            <Text style={styles.budynekTekst}>kategoria</Text>
          </View>
          <MenuComponentE2 setKategoriaTextCallBack={setKategoriaText} katTextCallBack={kategoriaText}/>
          <View style={styles.sporzadzWrapper}>
            <TouchableOpacity>
              <Image source={require("../ProjektAIDC/assets/raportPage/sporzadzBtn.png")} style={sporzadzBtnStyles.sporzadzBtnKategoria} resizeMode="contain"></Image>
            </TouchableOpacity>
          </View>
        </View> 
      </ImageBackground>
    </MenuProvider>
  ); 
}

export function RaportPietro({navigation, route}) {
  const [budText, setBudText] = useState("budynek");
  const [pietroText, setPietroText] = useState("piętro");
  return (
    <MenuProvider>
      <ImageBackground source={require("../ProjektAIDC/assets/tlo_raport.png")} style={styles.tlo}>
        <View style={styles.container}>
          <PasekNawigacyjny navigation={navigation}/>
          <Image
            source={require("../ProjektAIDC/assets/raportPage/raportTytul.png")}
            style={styles.raport}
          />
          <View style={styles.wedlugContainer}>
            <Image source={require("../ProjektAIDC/assets/raportPage/iconSporzRaportu.png")} style={styles.Icons}/>
            <Text style={styles.wedlugTekst}>piętro</Text>
          </View>
          <MenuComponentE3 setBudTextCallBack={setBudText} budTextProp={budText}/>
          <MenuComponentE31 setPietroTextCallBack={setPietroText} pietroTextProp={pietroText}/>
          <TouchableOpacity style={sporzadzBtnStyles.touchablePietro}>
            <Image source={require("../ProjektAIDC/assets/raportPage/sporzadzBtn.png")} style={sporzadzBtnStyles.sporzadzBtnPietro} resizeMode="contain"></Image>
          </TouchableOpacity>
        </View> 
      </ImageBackground>
    </MenuProvider>
  ); 
}


export function RaportPokoj({navigation, route}) {
  const [budText, setBudText] = useState("budynek");
  const [pietroText, setPietroText] = useState("piętro");
  const [pokojText, setPokojText] = useState("pokój");
  return (
    <MenuProvider>
      <ImageBackground source={require("../ProjektAIDC/assets/tlo_raport.png")} style={styles.tlo}>
        <View style={styles.container}>
          <PasekNawigacyjny navigation={navigation}/>
          <Image
            source={require("../ProjektAIDC/assets/raportPage/raportTytul.png")}
            style={styles.raport}
          />
          <View style={styles.wedlugContainer}>
            <Image source={require("../ProjektAIDC/assets/raportPage/iconSporzRaportu.png")} style={styles.Icons}/>
            <Text style={styles.wedlugTekst}>pokój</Text>
          </View>
          <MenuComponentE3 setBudTextCallBack={setBudText} budTextProp={budText}/>
          <MenuComponentE31 setPietroTextCallBack={setPietroText} pietroTextProp={pietroText}/>
          <MenuComponentE4 setPokojTextCallBack={setPokojText} pokojTextProp={pokojText}/>
          <TouchableOpacity style={sporzadzBtnStyles.touchablePokoj}>
            <Image source={require("../ProjektAIDC/assets/raportPage/sporzadzBtn.png")} style={sporzadzBtnStyles.sporzadzBtnPokoj} resizeMode="contain"></Image>
          </TouchableOpacity>
        </View> 
      </ImageBackground>
    </MenuProvider>
  ); 
}

export function RaportWedlugLista({navigation, route}) {
  const [wgTekst, setWgTekst] = useState("według");
  return (
    <MenuProvider>
      <ImageBackground source={require("../ProjektAIDC/assets/tlo_raport.png")} style={styles.tlo}>
        <View style={styles.container}>
          <PasekNawigacyjny navigation={navigation}/>
          <Image
            source={require("../ProjektAIDC/assets/raportPage/raportTytul.png")}
            style={styles.raport}
          />
          <View style={styles.wedlugContainer}>
            <Image source={require("../ProjektAIDC/assets/raportPage/iconSporzRaportu.png")} style={styles.Icons}/>
            <Text style={styles.wedlugTekst}>według</Text>
          </View>
          <MenuComponentE5 setWgTextCallBack={setWgTekst} wgTekstProp={wgTekst}/>
          <TouchableOpacity style={sporzadzBtnStyles.touchableWedlug}>
            <Image source={require("../ProjektAIDC/assets/raportPage/sporzadzBtn.png")} style={sporzadzBtnStyles.sporzadzBtnWedlug} resizeMode="contain"></Image>
          </TouchableOpacity>
        </View> 
      </ImageBackground>
    </MenuProvider>
  );
}

// Rozne warianty menu
// callbacki i props do przekazywania danych


export function MenuComponentE1(props) {

  return (
        <Menu>
          <MenuTrigger>
            <View style={styles.budynekContainer}>
              <Image source={require("../ProjektAIDC/assets/raportPage/iconBudynek.png")} style={styles.Icons}/>
              <Text style={styles.budynekTekst}>{props.budTextProp}</Text>
            </View>
          </MenuTrigger>
          <MenuOptions optionsContainerStyle={{marginLeft: 70, marginTop: 10, backgroundColor: "lightgray", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
            <MenuOption text={props.budTextProp} customStyles={{optionWrapper: {height: 60, backgroundColor: "lightgray", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 5}, optionText: {fontSize: 22, color: "#faf3ea"}}}/>
            <MenuOption onSelect={() => props.setBudTextCallBack("budynek 1")} customStyles={{optionWrapper: {height: 30, backgroundColor: "silver", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 1}, optionText: {fontSize: 18, color: "#faf3ea"}}} text={"budynek 1"}>
            </MenuOption>
            <MenuOption onSelect={() => props.setBudTextCallBack("budynek 2")} customStyles={{optionWrapper: {height: 30, backgroundColor: "darkgray", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 1}, optionText: {fontSize: 18, color: "#faf3ea"}}} text={"budynek 2"}>
            </MenuOption>
            <MenuOption onSelect={() => props.setBudTextCallBack("budynek 3")} customStyles={{optionWrapper: {height: 30, backgroundColor: "silver", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 1}, optionText: {fontSize: 18, color: "#faf3ea"}}} text={"budynek 3"}>
            </MenuOption>
          </MenuOptions>
        </Menu>
  );
}


export function MenuComponentE2(props) {
  return (
    <Menu>
      <MenuTrigger>
        <View style={styles.budynekContainer}>
          {/* <Image source={require("../ProjektAIDC/assets/raportPage/iconSporzRaportu.png")} style={styles.Icons}/> */}
          <AntDesign name={"folder1"} size={40} color={"white"} style={{marginTop: 15, marginLeft: 15}}/>
          <Text style={styles.kategoriaTekst}>{props.katTextCallBack}</Text>
        </View>
      </MenuTrigger>
      <MenuOptions optionsContainerStyle={{marginLeft: 70, marginTop: 10, backgroundColor: "lightgray", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
        <MenuOption text={props.katTextCallBack} customStyles={{optionWrapper: {height: 60, backgroundColor: "lightgray", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 5}, optionText: {fontSize: 22, color: "#faf3ea"}}}/>
        <MenuOption onSelect={() => props.setKategoriaTextCallBack("kategoria 1")} customStyles={{optionWrapper: {height: 30, backgroundColor: "silver", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 1}, optionText: {fontSize: 18, color: "#faf3ea"}}} text={"kategoria 1"}>
        </MenuOption>
        <MenuOption onSelect={() => props.setKategoriaTextCallBack("kategoria 2")} customStyles={{optionWrapper: {height: 30, backgroundColor: "darkgray", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 1}, optionText: {fontSize: 18, color: "#faf3ea"}}} text={"kategoria 2"}>
        </MenuOption>
        <MenuOption onSelect={() => props.setKategoriaTextCallBack("kategoria 3")} customStyles={{optionWrapper: {height: 30, backgroundColor: "silver", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 1}, optionText: {fontSize: 18, color: "#faf3ea"}}} text={"kategoria 3"}>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}


export function MenuComponentE3(props) {
  return (
    <Menu>
      <MenuTrigger>
        <View style={styles.budynekContainer}>
          <Image source={require("../ProjektAIDC/assets/raportPage/iconBudynek.png")} style={styles.Icons}/>
          <Text style={styles.budynekTekst}>{props.budTextProp}</Text>
        </View>
      </MenuTrigger>
      <MenuOptions optionsContainerStyle={{marginLeft: 70, marginTop: 10, backgroundColor: "lightgray", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
        <MenuOption text={props.budTextProp} customStyles={{optionWrapper: {height: 60, backgroundColor: "lightgray", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 5}, optionText: {fontSize: 20, color: "#faf3ea"}}}>
        </MenuOption>
        <MenuOption onSelect={() => props.setBudTextCallBack("budynek 1")} customStyles={{optionWrapper: {height: 30, backgroundColor: "silver", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 1}, optionText: {fontSize: 18, color: "#faf3ea"}}} text={"budynek 1"}>
        </MenuOption>
        <MenuOption onSelect={() => props.setBudTextCallBack("budynek 2")} customStyles={{optionWrapper: {height: 30, backgroundColor: "darkgray", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 1}, optionText: {fontSize: 18, color: "#faf3ea"}}} text={"budynek 2"}>
        </MenuOption>
        <MenuOption onSelect={() => props.setBudTextCallBack("budynek 3")} customStyles={{optionWrapper: {height: 30, backgroundColor: "silver", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 1}, optionText: {fontSize: 18, color: "#faf3ea"}}} text={"budynek 3"}>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}

export function MenuComponentE31(props) {
  return (
    <Menu>
      <MenuTrigger>
        <View style={styles.budynekContainer}>
          <Image source={require("../ProjektAIDC/assets/raportPage/iconPietro.png")} style={styles.Icons}/>
          <Text style={styles.budynekTekst}>{props.pietroTextProp}</Text>
        </View>
      </MenuTrigger>
      <MenuOptions optionsContainerStyle={{marginLeft: 70, marginTop: 10, backgroundColor: "lightgray", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
        <MenuOption text={props.pietroTextProp} customStyles={{optionWrapper: {height: 60, backgroundColor: "lightgray", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 5}, optionText: {fontSize: 20, color: "#faf3ea"}}}/>
        <MenuOption onSelect={() => props.setPietroTextCallBack("piętro 1")} customStyles={{optionWrapper: {height: 30, backgroundColor: "silver", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 1}, optionText: {fontSize: 18, color: "#faf3ea"}}} text={"piętro 1"}>
        </MenuOption>
        <MenuOption onSelect={() => props.setPietroTextCallBack("piętro 2")} customStyles={{optionWrapper: {height: 30, backgroundColor: "darkgray", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 1}, optionText: {fontSize: 18, color: "#faf3ea"}}} text={"piętro 2"}>
        </MenuOption>
        <MenuOption onSelect={() => props.setPietroTextCallBack("piętro 3")} customStyles={{optionWrapper: {height: 30, backgroundColor: "silver", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 1}, optionText: {fontSize: 18, color: "#faf3ea"}}} text={"piętro 3"}>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}

export function MenuComponentE4(props) {
  return (
    <Menu>
      <MenuTrigger>
        <View style={styles.budynekContainer}>
          <Image source={require("../ProjektAIDC/assets/raportPage/iconPokoj.png")} style={styles.Icons}/>
          <Text style={styles.budynekTekst}>{props.pokojTextProp}</Text>
        </View>
      </MenuTrigger>
      <MenuOptions optionsContainerStyle={{marginLeft: 70, marginTop: 10, backgroundColor: "lightgray", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
        <MenuOption text={props.pokojTextProp} customStyles={{optionWrapper: {height: 60, backgroundColor: "lightgray", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 5}, optionText: {fontSize: 20, color: "#faf3ea"}}}/>
        <MenuOption onSelect={() => props.setPokojTextCallBack("pokój 1")} customStyles={{optionWrapper: {height: 30, backgroundColor: "silver", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 1}, optionText: {fontSize: 18, color: "#faf3ea"}}} text={"pokój 1"}>
        </MenuOption>
        <MenuOption onSelect={() => props.setPokojTextCallBack("pokój 2")} customStyles={{optionWrapper: {height: 30, backgroundColor: "darkgray", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 1}, optionText: {fontSize: 18, color: "#faf3ea"}}} text={"pokój 2"}>
        </MenuOption>
        <MenuOption onSelect={() => props.setPokojTextCallBack("pokój 3")} customStyles={{optionWrapper: {height: 30, backgroundColor: "silver", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 1}, optionText: {fontSize: 18, color: "#faf3ea"}}} text={"pokój 3"}>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}


export function MenuComponentE5(props) {
  return (
    <Menu>
      <MenuTrigger>
        <View style={styles.budynekContainer}>
          <Image source={require("../ProjektAIDC/assets/raportPage/iconSporzRaportu.png")} style={styles.Icons}/>
          <Text style={styles.budynekTekst}>{props.wgTekstProp}</Text>
        </View>
      </MenuTrigger>
      <MenuOptions optionsContainerStyle={{marginLeft: 70, marginTop: 10, backgroundColor: "lightgray", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
        <MenuOption text={props.wgTekstProp} customStyles={{optionWrapper: {height: 60, backgroundColor: "lightgray", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 5}, optionText: {fontSize: 20, color: "#faf3ea"}}}/>
        <MenuOption onSelect={() => props.setWgTextCallBack("budynek")} customStyles={{optionWrapper: {height: 30, backgroundColor: "silver", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 1}, optionText: {fontSize: 18, color: "#faf3ea"}}} text={"budynek"}>
        </MenuOption>
        <MenuOption onSelect={() => props.setWgTextCallBack("piętro")} customStyles={{optionWrapper: {height: 30, backgroundColor: "darkgray", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 1}, optionText: {fontSize: 18, color: "#faf3ea"}}} text={"piętro"}>
        </MenuOption>
        <MenuOption onSelect={() => props.setWgTextCallBack("pokój")} customStyles={{optionWrapper: {height: 30, backgroundColor: "silver", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 1}, optionText: {fontSize: 18, color: "#faf3ea"}}} text={"pokój"}>
        </MenuOption>
        <MenuOption onSelect={() => props.setWgTextCallBack("kategoria")} customStyles={{optionWrapper: {height: 30, backgroundColor: "darkgray", marginLeft: 5, marginTop: 5, marginRight: 5, marginBottom: 1}, optionText: {fontSize: 18, color: "#faf3ea"}}} text={"kategoria"}>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );  
}





const styles = StyleSheet.create({


  container: {
    alignItems: "center",
  },
  tlo: {
    width: "100%",
    height: "100%",
  },
  raport: {
    resizeMode: "contain",
    width: 200,
    top: 30,
    marginBottom: 50,
  },
  wedlug: {
    marginTop: 100,
    marginBottom: 30,
    width: width * 0.9,
    height: height * 0.1,
    paddingTop: 20,
  },
  tekstWedlugBud: {
    color: "#faf3ea",
    textAlignVertical: "top",
    marginLeft: "20%",
    width: "100%",
    fontSize: 22,
    textAlign: "left",
  },
  budynekTlo: {
    marginTop: 10,
    width: width * 0.9,
    height: height * 0.1,
    paddingTop: 20,
  },
  pietroTlo: {    
    marginTop: 5,
    width: width * 0.9,
    height: height * 0.1,
    paddingTop: 20,
  },
  tekstPietro: {
    color: "#faf3ea",
    textAlignVertical: "top",
    marginLeft: "20%",
    width: "100%",
    fontSize: 22,
  },
  tekstBud: {
    color: "#faf3ea",
    textAlignVertical: "top",
    marginLeft: "20%",
    width: "100%",
    fontSize: 22,    
  },






  wedlugContainer: {
    marginTop: 100,
    marginBottom: 30,
    width: width * 0.9,
    height: height * 0.1,
    flexDirection: "row",
    borderRadius: 28,
    backgroundColor: "#ffc06f",
  },
  wedlugTekst: {
    color: "#faf3ea",
    flex: 1,
    width: "100%",
    fontSize: 26,
    paddingTop: 15,
    paddingLeft: 10,
  },
  budynekContainer: {
    marginTop: 10,
    width: width * 0.9,
    height: height * 0.1,
    flexDirection: "row",
    borderRadius: 28,
    backgroundColor: "rgb(143, 165, 191)",
  },
  budynekTekst: {
    color: "#faf3ea",
    flex: 1,
    width: "100%",
    fontSize: 26,
    paddingTop: 20,
    paddingLeft: 10,
  },
  kategoriaTekst: {
    color: "#faf3ea",
    flex: 1,
    width: "100%",
    fontSize: 26,
    paddingTop: 20,
    paddingLeft: 30,
  },


  
  Icons: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  sporzadzWrapper: {
    width: 170,
    height: 60,
    marginTop: 200,
  },
});





const sporzadzBtnStyles = StyleSheet.create({
  sporzadzBtnBudynek: {
    width: width * 0.4,
    height: height * 0.1,
  },
  sporzadzBtnKategoria: {
    width: width * 0.4,
    height: height * 0.1,
  },
  sporzadzBtnPietro: {
    // marginTop: -60,
    width: width * 0.4,
    height: height * 0.1,
  },
  sporzadzBtnPokoj: {
    marginTop: 40,
    width: width * 0.4,
    height: height * 0.1,
  },
  touchablePietro: {
    position: "absolute",
    top: 600,
  },
  sporzadzBtnWedlug: {
    width: width * 0.4,
    height: height * 0.1,
  },
  touchableWedlug: {
    position: "absolute",
    top: 580,
  }
});



