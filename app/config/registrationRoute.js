import { createStackNavigator } from 'react-navigation';
import RegisterScreen from '../screen/register';
import FormFilling from '../screen/register/formFilling';
import LoginSignUpScreen from '../screen/loginSignUp';

const RegistrationRouting = createStackNavigator({
    RegisterScreen: {
        screen: RegisterScreen,
    },
    Form: {
        screen: FormFilling,
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

export default RegistrationRouting;