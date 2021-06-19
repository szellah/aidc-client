import React, { useState, useEffect } from "react";
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
import { getArticleCategories, getBuildings, getFloors, getRooms, getArticleReport } from "../../clientRequests/Creq_lib";

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
export default function CreateReport({ navigation }) {

  const [notificationVisibility, setNotificationVisibility] = useState(false); 
  const [notificationContent, setNotificationContent] =useState({});


  
  const [reportId, setReportId] = useState(0);
  const [reportText, setReportText] = useState("");

  const ReportSelectHandler = (name, value) =>{
    setReportText(name);
    setReportId(value);
  }

  const reportOptions = [
    { name: "Kategoria", value: 1, id: 1 },
    { name: "Budynek", value: 2, id: 2 },
    { name: "Piętro", value: 3, id: 3 },
    { name: "Pokój", value: 4, id: 4 },
  ];

  const [categoryId, setCategoryId] = useState(0);
  const [categoryText, setCategoryText] = useState("");

  const [categoryOptions, setCategoryOptions] = useState([]);

  const CategorySelectHandler = (name, value) =>{
    setCategoryText(name);
    setCategoryId(value);
  }



  const [buildingId, setBuildingId] = useState(0);
  const [buildingText, setBuildingText] = useState("");

  const [buildingOptions, setBuildingOptions] = useState([]);

  const BuildingSelectHandler = (name, value) =>{
    setBuildingText(name);
    setBuildingId(value);

    FloorSelectHandler("","");
    RoomSelectHandler("","");
  }



  useEffect(() => {
    if(reportText === "Kategoria")
    {
      getArticleCategories().then((options) => {
        setCategoryOptions(options.message);
      })
      .catch((error)=>{
        setNotificationContent(error);
        setNotificationVisibility(true);
      });
    }

    if(reportText === "Budynek" || reportText === "Piętro" || reportText === "Pokój")
    {
      getBuildings().then((options) => {
        setBuildingOptions(options.message);
      })
      .catch((error)=>{
        setNotificationContent(error);
        setNotificationVisibility(true);
      });
    }

    
  },[reportText]);

  const [floorId, setFloorId] = useState(0);
  const [floorText, setFloorText] = useState("");

  const [floorOptions, setFloorsOptions] = useState([]);

  const FloorSelectHandler = (name, value) =>{
    setFloorText(name);
    setFloorId(value);

    RoomSelectHandler("","");
  }

  useEffect(() => {
    if(reportText === "Piętro" || reportText === "Pokój")
    {
      getFloors(
        {
          building: parseInt(buildingId)
        }
      ).then((options) => {
        setFloorsOptions(options.message);
      })
      .catch((error)=>{
        setNotificationContent(error);
        setNotificationVisibility(true);
      });
    }    
  },[reportText, buildingId]);


  const [roomId, setRoomId] = useState(0);
  const [roomText, setRoomText] = useState("");

  const [roomsOptions, setRoomsOptions] = useState([]);

  const RoomSelectHandler = (name, value) =>{
    setRoomText(name);
    setRoomId(value);
  }

  useEffect(() => {
    if(reportText === "Pokój")
    {
      getRooms(
        {
          building: parseInt(buildingId),
          floor: parseInt(floorId)
        }
      ).then((options) => {
        setRoomsOptions(options.message);
      })
      .catch((error)=>{
        setNotificationContent(error);
        setNotificationVisibility(true);
      });
    }    
  },[reportText, buildingId, floorId]);



  const Create = () => {
    getArticleReport(
      {
      reportChoice: reportText,
      building: parseInt(buildingId),
      floor: parseInt(floorId),
      room: parseInt(roomId),
      category: categoryText
      }
    )
    .then((data) =>{
      console.log(data.message);
      navigation.navigate("Report", {data: data.message});
    })
    .catch((error)=>{
      setNotificationContent(error);
      setNotificationVisibility(true);
    });
    
  }

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
              options={roomsOptions} 
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
                  pressHandler={Create}
                />
              </Tray>
            </Container>
          </MenuProvider>
        </Container>
      </ImageBackground>
    </ScrollView>
  );
}
