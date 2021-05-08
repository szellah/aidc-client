import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LocalisationMenu from '../screens/LocalisationMenu';
import LocalisationEditDelete from '../screens/LocalisationEditDelete';
import LocalisationSaveCancel from '../screens/LocalisationSaveCancel';


const screens = {
    
    Test: {
        screen: LocalisationMenu
    }
}

const HomeStack = createStackNavigator(screens); 
export default createAppContainer(HomeStack);