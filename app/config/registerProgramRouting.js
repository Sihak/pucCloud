
import { createStackNavigator } from 'react-navigation';
import RegisterScreen from '../screen/register';
import ListPrograms from '../screen/register/listPrograms';
import paymentRouting from './paymentRouting';
export default RegisterProgramRouting = createStackNavigator({

    ListPrograms:{
        screen: ListPrograms,
        navigationOptions: {
            gesturesEnabled: false
        }
    },

    Register: {
        screen: RegisterScreen,
        navigationOptions: {
            gesturesEnabled: false
        }
    },
    Invoice: {
        screen: paymentRouting,
        navigationOptions: {
            gesturesEnabled: false,
        }
    }
}, {
        headerMode: 'none',
        mode: 'card'
    })