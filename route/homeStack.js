import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home.js';
import Login from '../screens/Login.js';
import Dodawanie from '../screens/Dodawanie.js';
import Report from '../screens/Report.js';
import {RaportBudynek} from '../screens/RaportScreens';
import Test from '../screens/Test';


const screens = {
    
    Test: {
        screen: Test
    },
    Dodawanie: {
        screen: Dodawanie
    },
    Home: {
        screen: Home
    },
    Raport: {
        screen: RaportBudynek
    },
}

const HomeStack = createStackNavigator(screens); 
export default createAppContainer(HomeStack);