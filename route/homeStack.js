import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
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

const screens = {
  Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
  },
  Test: {
    screen: Test,
  },
  ArticleEdit: {
    screen: ArticleEdit,
  },
  ArticleInfo: {
    screen: ArticleInfo,
  },
  Report: {
    screen: Report,
  },
  ArticleMenu: {
    screen: ArticleMenu,
  },
  Managment: {
    screen: ArticleManagmentMenu,
  },
  ScanLocation: {
    screen: ScanLocation,
  },
  ScanArticle: {
    screen: ScanArticle,
  },
  Settings:{
    screen: SettingsMenu,
  },
  AccountChangePassword:{
    screen: ChangePassword,
  },
  DeleteAccount: {
    screen: DeleteAccount,
  },
  LocationMenu: {
    screen: LocationMenu,
  },
  LocationInfo: {
    screen: LocationInfo,
  },
  LocationEdit: {
    screen: LocationEdit,
  },
  UsersMenu:{
    screen: UsersMenu,
  },
  UserInfo:{
    screen: UserInfo,
  },
  UserEdit:{
    screen: UserEdit,
  },
  UsersTable:{
    screen: UsersTable,
  },
  Scan:{
    screen: Scan,
  },
  CreateReport:{
    screen: CreateReport,
  },
  AccountInfo:{
    screen: AccountInfo,
  },AccountEdit:{
    screen: AccountEdit,
  },
  ResetPassword:{
    screen: ResetPassword,
  }


};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
