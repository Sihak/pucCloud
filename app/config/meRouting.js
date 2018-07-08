import { createStackNavigator } from 'react-navigation';
import LoginSignUpScreen from '../screen/loginSignUp';
import MeScreen from '../screen/me';

const MeRouting = createStackNavigator({
    Me: {
        screen: MeScreen,
    },
    LoginSignUp: {
        screen: LoginSignUpScreen,
        navigationOptions: {
            gesturesEnabled: false,
        }
    }
},
    {
        headerMode: 'none',
        mode: 'modal',
    })

export default MeRouting;
