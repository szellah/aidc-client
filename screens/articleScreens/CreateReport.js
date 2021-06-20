import React, { useState } from "react";
import { ImageBackground, Text, View, ScrollView } from "react-native";
import { CreateButton } from "../../components/Buttons";
import { Tray } from "../../components/Trays";
import { Container } from "../../components/Containers";
import {
  BuildingSelect,
  FloorSelect,
  RoomSelect,
  CategorySelect,
  ReportSelect,
} from "../../components/Selects";
import { MenuProvider } from "react-native-popup-menu";
import XLSX from 'xlsx';
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
 function Creq_reportXsl(table){
  //Tworzenie arkusza
  var sheet = XLSX.utils.json_to_sheet(table);
  var file = XLSX.utils.book_new();
  //Łączenie do jednego skoroszytu
  XLSX.utils.book_append_sheet(file, sheet, "Article");
  //Dopis do skoroszytu
  //XLSX.write(file, {/* Miejsce na tablicę */});
}
export default function CreateReport({ navigation }) {
  
  const [reportId, setReportId] = useState(0);
  const [reportText, setReportText] = useState("");

  const ReportSelectHandler = (name, value) =>{
    setReportText(name);
    setReportId(value);
  }

  const reportOptions = [
    { name: "kategoria", value: 1, id: 1 },
    { name: "budynek", value: 2, id: 2 },
    { name: "piętro", value: 3, id: 3 },
    { name: "pokój", value: 4, id: 4 },
  ];

  const [categoryId, setCategoryId] = useState(0);
  const [categoryText, setCategoryText] = useState("");

  const CategorySelectHandler = (name, value) =>{
    setCategoryText(name);
    setCategoryId(value);
  }

  const categoryOptions = [
    { name: "monitor", value: "111", id: 1 },
    { name: "myszka", value: "112", id: 2 },
    { name: "drukarka", value: "111", id: 3 },
    { name: "klawiatura", value: "112", id: 4 },
    { name: "jednostka centralna", value: "112", id: 5 },
  ];

  const [buildingId, setBuildingId] = useState(0);
  const [buildingText, setBuildingText] = useState("");

  const BuildingSelectHandler = (name, value) =>{
    setBuildingText(name);
    setBuildingId(value);
  }

  const buildingOptions = [
    { name: "budynek 1", value: "1", id: 1 },
    { name: "budynek 2", value: "2", id: 2 },
  ];

  const [floorId, setFloorId] = useState(0);
  const [floorText, setFloorText] = useState("");

  const FloorSelectHandler = (name, value) =>{
    setFloorText(name);
    setFloorId(value);
  }

  const floorOptions = [
    { name: "parter", value: "0", id: 1 },
    { name: "piętro 1", value: "1", id: 2 },
  ];

  const [roomId, setRoomId] = useState(0);
  const [roomText, setRoomText] = useState("");

  const RoomSelectHandler = (name, value) =>{
    setRoomText(name);
    setRoomId(value);
  }

  const roomOptions = [
    { name: "pokój 111", value: "111", id: 1 },
    { name: "pokój 112", value: "112", id: 2 },
  ];
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/tlo_raport.png")}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Container composition="compact" spread="top">
          <Tray composition="loose" spread="center">
            <Text style={{ fontSize: 40, color: "white", marginBottom: "17%" }}>
              RAPORT
            </Text>
          </Tray>
          <MenuProvider>
            <ReportSelect 
            changeHandler={ReportSelectHandler} 
            text={reportText} 
            options={reportOptions} 
            />

            {reportId >= 2 && (
              <BuildingSelect
                changeHandler={BuildingSelectHandler}
                text={buildingText} 
                options={buildingOptions}
              />
            )}

            {reportId >= 3 && (
              <FloorSelect
              text={floorText}
              changeHandler={FloorSelectHandler} 
              options={floorOptions} 
              />
            )}

            {reportId >= 4 && (
              <RoomSelect 
              changeHandler={RoomSelectHandler}
              text={roomText}
              options={roomOptions} 
              />
            )}

            {reportId == 1 && (
              <CategorySelect
                changeHandler={CategorySelectHandler}
                text={categoryText}
                options={categoryOptions}
              />
            )}

            <Container composition="loose" spread="bottom">
              <Tray composition="loose" spread="center">
                <CreateButton
                  pressHandler={() => {
                    navigation.navigate("Raport");
                    Creq_reportXsl(reportText);
                  }}
                />
              </Tray>
            </Container>
          </MenuProvider>
        </Container>
      </ImageBackground>
    </ScrollView>
  );
}
