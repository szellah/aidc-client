import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home.js';
import Login from '../screens/Login.js';
import Dodawanie from '../screens/Dodawanie.js';
import Report from '../screens/Report.js';
import Test from '../screens/Test';
import Settings from '../screens/Settings';
import DeleteAccount from '../screens/DeleteAccount';
import ChangePassword from '../screens/ChangePassword';


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
        screen: Report
    },
    Ustawienia: {
        screen: Settings
    },
    UsunKonto: {
        screen: DeleteAccount
    },
    ZmienHaslo: {
        screen: ChangePassword
    },
}

const HomeStack = createStackNavigator(screens); 
export default createAppContainer(HomeStack);