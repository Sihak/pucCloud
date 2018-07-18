import { createStackNavigator } from 'react-navigation';
import InvoiceScreen from '../screen/payment';
import ConfirmPayment from '../screen/payment/confirmPayment';
export default PaymentRouting = createStackNavigator({
    Invoice: {
        screen: InvoiceScreen,
        navigationOptions: {
            gesturesEnabled: false
        }
    },
    ConfirmPayment:{
        screen: ConfirmPayment,
        navigationOptions: {
            gesturesEnabled: false
        }
    }
   
}, {
        initialRouteName:'Invoice',
        headerMode: 'none',
        mode: 'card'
    })