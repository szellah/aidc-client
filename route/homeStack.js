import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home.js";
import Login from "../screens/Login.js";
import ArticlePanelSave from "../screens/ArticlePanelSave";
import ArticlePanelEdit from "../screens/ArticlePanelEdit";
import Report from "../screens/Report.js";
import Test from "../screens/Test";
import ArticleMenu from "../screens/ArticleMenu";
import Managment from "../screens/Managment";
import ScanLocation from "../screens/ScanLocation";
import ScanArticle from "../screens/ScanArticle.js";

const screens = {
  Test: {
    screen: Test,
  },
  ArticlePanelSave: {
    screen: ArticlePanelSave,
  },
  ArticlePanelEdit: {
    screen: ArticlePanelEdit,
  },
  Home: {
    screen: Home,
  },
  Raport: {
    screen: Report,
  },
  ArticleMenu: {
    screen: ArticleMenu,
  },
  Managment: {
    screen: Managment,
  },
  ScanLocation: {
    screen: ScanLocation,
  },
  ScanArticle: {
    screen: ScanArticle,
  },
};

const HomeStack = createStackNavigator(screens, { headerMode: "none" });
export default createAppContainer(HomeStack);
