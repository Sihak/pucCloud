import { createStackNavigator } from 'react-navigation';
import ProgramScreen from '../screen/program';
import RegisterProgramRouting from './registerProgramRouting';
import loginSignupRouting from './loginSignupRouting';
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