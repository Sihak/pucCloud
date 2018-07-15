import { createStackNavigator } from 'react-navigation';
import LoginSignUp from '../screen/loginSignUp';
import MeScreen from '../screen/me';
export default MeRouting = createStackNavigator({

    MeScreen:{
        screen: MeScreen,
        navigationOptions:{
            gesturesEnabled : false
        }
    },

    LoginSignUp:{
        screen: LoginSignUp,
        navigationOptions:{
            gesturesEnabled : false
        }
    },
}, {
        headerMode: 'none',
        mode: 'card'
    })