import { createStackNavigator } from 'react-navigation';
import ProgramScreen from '../screen/program';
import RegisterScreen from '../screen/register';
import RegisterDetails from '../screen/register/registerDetails';
import loginSignupRouting from './loginSignupRouting';
import RegisterProgramRouting from './registerProgramRouting';
export default ProgramRouting = createStackNavigator({

    Programs: {
        screen: ProgramScreen,
    },
    LoginSignUp:{
        screen: loginSignupRouting,
        navigationOptions:{
            gesturesEnabled : false
        }
    },
    Register:{
        screen: RegisterProgramRouting,
        navigationOptions:{
            gesturesEnabled : false
        }
    },
  
}, {
        headerMode: 'none',
        mode: 'modal'
    })