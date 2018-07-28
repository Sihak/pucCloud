import { createStackNavigator } from 'react-navigation';
import LoginSignUp from '../screen/loginSignUp';
import MeScreen from '../screen/me';
import PaymentScreen from '../screen/me/paymentScreen';
import InvoiceScreen from '../screen/payment';
import ConfirmPayment from '../screen/payment/confirmPayment';

const OnPayment = createStackNavigator({
    Payment: {
        screen: PaymentScreen,
        navigationOptions: {
            gesturesEnabled: true
        }
    },
    Invoice: {
        screen: InvoiceScreen,
        navigationOptions: {
            gesturesEnabled: true
        }
    },
    ConfirmPayment: {
        screen: ConfirmPayment,
        navigationOptions: {
            gesturesEnabled: true
        }
    },
}, {
        headerMode: 'none',
        mode: 'modal',

    });


const ClassRoute = createStackNavigator({
    Class: {
        screen: PaymentScreen,
        navigationOptions: {
            gesturesEnabled: true
        }
    },
}, {
        headerMode: 'none',

    });

export default MeRouting = createStackNavigator({

    MeScreen: {
        screen: MeScreen,
        navigationOptions: {
            gesturesEnabled: false
        }
    },

    Payment: {
        screen: OnPayment,
        navigationOptions: {
            gesturesEnabled: true
        }
    },

    LoginSignUp: {
        screen: LoginSignUp,
        navigationOptions: {
            gesturesEnabled: false,
        }
    },
    Class: {
        screen: ClassRoute,
        navigationOptions: {
            gesturesEnabled: false,
        }
    },
}, {
        headerMode: 'none',
        
    })


