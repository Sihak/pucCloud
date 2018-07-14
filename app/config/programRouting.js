import { createStackNavigator } from 'react-navigation';
import ProgramScreen from '../screen/program';
import LoginSignUp from '../screen/loginSignUp';
import RegisterScreen from '../screen/register';
export default ProgramRouting = createStackNavigator({

    Programs: {
        screen: ProgramScreen,
    },
    LoginSignUp:{
        screen: LoginSignUp,
        navigationOptions:{
            gesturesEnabled : false
        }
    },
    Register:{
        screen: RegisterScreen,
        navigationOptions:{
        }
    }
}, {
        headerMode: 'none',
        mode: 'modal'
    })