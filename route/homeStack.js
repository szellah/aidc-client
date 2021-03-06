import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React from "react";
import { Text, StyleSheet } from "react-native";
import Home from "../screens/Home.js";
import Login from "../screens/Login.js";
import ArticleEdit from "../screens/articleScreens/ArticleEdit";
import ArticleInfo from "../screens/articleScreens/ArticleInfo";
import Report from "../screens/articleScreens/Report";
import Test from "../screens/Test";
import ArticleMenu from "../screens/articleScreens/ArticleMenu";
import ArticleManagmentMenu from "../screens/articleScreens/ArticleManagmentMenu";
import ScanLocation from "../screens/scanScreens/ScanLocation";
import ScanArticle from "../screens/scanScreens/ScanArticle";
import SettingsMenu from "../screens/settingsScreens/SettingsMenu";
import ChangePassword from "../screens/settingsScreens/ChangePassword";
import DeleteAccount from "../screens/settingsScreens/DeleteAccount";
import LocationMenu from "../screens/locationScreens/LocationMenu";
import LocationInfo from "../screens/locationScreens/LocationInfo";
import LocationEdit from "../screens/locationScreens/LocationEdit";
import UsersMenu from "../screens/userScreens/UsersMenu";
import UserInfo from "../screens/userScreens/UserInfo";
import UserEdit from "../screens/userScreens/UserEdit";
import UsersTable from "../screens/userScreens/UsersTable";
import Scan from "../screens/scanScreens/Scan";
import CreateReport from "../screens/articleScreens/CreateReport";
import AccountInfo from "../screens/settingsScreens/AccountInfo.js";
import AccountEdit from "../screens/settingsScreens/AccountEdit.js";
import ResetPassword from "../screens/ResetPassword.js";

const Wrapper = ({children}) => {
  return((<Text style={{fontSize: 18, fontWeight: "bold", color: "rgba(0,0,0,0.5)"}}>{children}</Text>))
}

const screens = {
  Login: {
    screen: Login,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),  
  },
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => {return null;},
      headerTitle: () => (<Wrapper>Menu g????wne</Wrapper>)
    }),  
  },
  Test: {
    screen: Test,
  },
  ArticleEdit: {
    screen: ArticleEdit,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Edycja artyku??u</Wrapper>)
    }),  
  },
  ArticleInfo: {
    screen: ArticleInfo,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Informacje artyku??u</Wrapper>)
    }),  
  },
  Report: {
    screen: Report,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Raport</Wrapper>)
    }),  
  },
  ArticleMenu: {
    screen: ArticleMenu,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Menu towaru</Wrapper>)
    }),  
  },
  Managment: {
    screen: ArticleManagmentMenu,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Menu zarz??dzania towarem</Wrapper>)
    }),  
  },
  ScanLocation: {
    screen: ScanLocation,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Akanuj lokalizacje</Wrapper>)
    }),  
  },
  ScanArticle: {
    screen: ScanArticle,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Skanuj artyku??</Wrapper>)
    }),  
  },
  Settings:{
    screen: SettingsMenu,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Menu ustawie??</Wrapper>)
    }),  
  },
  AccountChangePassword:{
    screen: ChangePassword,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Zmie?? has??o</Wrapper>)
    }),  
  },
  DeleteAccount: {
    screen: DeleteAccount,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Usu?? konto</Wrapper>)
    }),  
  },
  LocationMenu: {
    screen: LocationMenu,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Menu lokalizacji</Wrapper>)
    }),  
  },
  LocationInfo: {
    screen: LocationInfo,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Informacje lokalizacji</Wrapper>)
    }),  
  },
  LocationEdit: {
    screen: LocationEdit,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Edytuj lokalizacje</Wrapper>)
    }),  
  },
  UsersMenu:{
    screen: UsersMenu,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Menu u??ytkownik??w</Wrapper>)
    }),  
  },
  UserInfo:{
    screen: UserInfo,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Informacje u??ytkownika</Wrapper>)
    }),  
  },
  UserEdit:{
    screen: UserEdit,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Edycja u??ytkownika</Wrapper>)
    }),  
  },
  UsersTable:{
    screen: UsersTable,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Tablica u??ytkownik??w</Wrapper>)
    }),  
  },
  Scan:{
    screen: Scan,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Skaner</Wrapper>)
    }),  
  },
  CreateReport:{
    screen: CreateReport,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Stw??rz raport</Wrapper>)
    }),  
  },
  AccountInfo:{
    screen: AccountInfo,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Informacje u??ytkownika</Wrapper>)
    }),  
  },AccountEdit:{
    screen: AccountEdit,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Edycja artyku??</Wrapper>)
    }),  
  },
  ResetPassword:{
    screen: ResetPassword,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (<Wrapper>Odnawianie has??a</Wrapper>)
    }),  
  }


};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
