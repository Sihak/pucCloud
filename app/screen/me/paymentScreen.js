import React, { Component } from 'react';
import { FlatList, View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import CardPayment from './cardPayment';
import { DIMENSION } from '../../module'
import Ionicons from 'react-native-vector-icons/Ionicons';
class PaymentScreen extends Component {

    renderItemSplitter() {
        return (
            <View style={{ paddingVertical: DIMENSION(2) }}></View>
        )
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f3f5' }}>
                <View style={[styles.header]}>
                    <Text style={styles.headerTittle}>Payment</Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.popToTop()}>
                        <Ionicons style={styles.closeIcon} name={'md-arrow-back'} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={styles.body}
                    ItemSeparatorComponent={() => this.renderItemSplitter()}
                    keyExtractor={(item, index) => index.toString()}
                    data={[1, 2, 3]}
                    renderItem={({ item }) => {
                        return (<CardPayment
                            buttonPressed = {() => this.props.navigation.navigate('Invoice')}
                             />)
                    }}
                />
            </SafeAreaView>
        );
    }
}


const styles = {
    body: {
        flex: 1,
        backgroundColor: '#f2f3f5',
        paddingHorizontal: DIMENSION(5)
    },
    closeIcon: {
        fontSize: 38,
        color: COLORS.RED
    },
    header: {
        backgroundColor: '#f2f3f5',
        width: DIMENSION(100),
        height: DIMENSION(15),
        paddingHorizontal: DIMENSION(5.5),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTittle: {
        fontSize: 32,
        fontWeight: '800',
        color: COLORS.TEXT_DARK,
    },
}


export default PaymentScreen;