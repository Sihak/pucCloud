import { createStackNavigator } from 'react-navigation';
import ProgramScreen from '../screen/program';
import LoginSignUp from '../screen/loginSignUp';
import RegisterScreen from '../screen/register';
import RegisterDetails from '../screen/register/registerDetails';
export default LoginSignUpRouting = createStackNavigator({

    LoginSignUp:{
        screen: LoginSignUp,
        navigationOptions:{
            gesturesEnabled : false
        }
    },
    Register:{
        screen: RegisterScreen,
        navigationOptions:{
            gesturesEnabled : false
        }
    },
    RegisterDetails:{
        screen: RegisterDetails,
        navigationOptions:{
            gesturesEnabled : false,
        }
    }
}, {
        headerMode: 'none',
        mode: 'card'
    })