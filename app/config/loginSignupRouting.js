import { createStackNavigator } from 'react-navigation';
import LoginSignUp from '../screen/loginSignUp';
import registerProgramRouting from './registerProgramRouting';
export default LoginSignUpRouting = createStackNavigator({
  
    LoginSignUp: {
        screen: LoginSignUp,
        navigationOptions: {
            gesturesEnabled: false
        }
    },
    Register: {
        screen: registerProgramRouting,
        navigationOptions: {
            gesturesEnabled: false
        }
    },
   
}, {
        initialRouteName:'LoginSignUp',
        headerMode: 'none',
        mode: 'card'
    })