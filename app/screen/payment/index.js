//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Alert, FlatList } from 'react-native';
import { COLORS, DIMENSION, APPEARANCES } from '../../module'
import { inject, observer } from 'mobx-react';
import Ionicons from "react-native-vector-icons/Ionicons";

@inject('user', 'register')
@observer
class InvoiceScreen extends Component {
    constructor() {
        super();
        this.state = {
        }
    }


    componentDidMount() {

    }

    componentWillUnmount() {
    }

    onNext() {
        this.props.navigation.navigate('ConfirmPayment')
    }

    render() {
        const { preRegister } = this.props.register;
        const { user } = this.props.user;
        console.log(preRegister)
        return (
            <SafeAreaView style={styles.container}>
                    <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={[styles.header]}>
                        <Text style={styles.headerTittle}>Invoice</Text>
                        <TouchableOpacity
                            onPress={ () => {
                                 this.props.register.changeIsRegister(true);
                                 this.props.navigation.popToTop();
                            }
                            }
                        >
                            <Ionicons style={styles.closeIcon} name={'md-close'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.body}>
                            <View style={[styles.card, APPEARANCES.SHADOW]}>
                                <View style={styles.cardHeader}>
                                    <View style={styles.cardHeader}>
                                        <View style={[styles.tickContainer, APPEARANCES.SHADOW]}>
                                            <Image source={user ? require('../../asset/image/tick.png') : require('../../asset/image/NoUser.png')} style={styles.tickImg} />
                                        </View>
                                        <Text style={styles.congratulationText}>Congratulations!</Text>
                                        <Text style={styles.subCongratulations}>Your registeration is completed.</Text>
                                    </View>
                                </View>
                                <View style={styles.cardBody}>
                                    <View style={styles.descriptionContainer}>
                                        <View style={styles.description}>
                                            <Text style={styles.label}>Institution</Text>
                                            <Text style={styles.detail}>English Program</Text>
                                        </View>
                                        <View style={styles.description}>
                                            <Text style={styles.label}>Program</Text>
                                            <Text style={styles.detail}>GESL</Text>
                                        </View>
                                    </View>
                                    <View style={styles.descriptionContainer}>
                                        <View style={styles.description}>
                                            <Text style={styles.label}>Bill to</Text>
                                            <Text style={[styles.detail]}>{user ? (user.displayName ? user.displayName : user.email) : 'No User'}</Text>
                                        </View>
                                        <View style={styles.description}>
                                            <Text style={styles.label}>Invoice No</Text>
                                            <Text style={styles.detail}>GESL01</Text>
                                        </View>
                                    </View>
                                    <View style={styles.descriptionContainer}>
                                        <View style={styles.description}>
                                            <Text style={styles.label}>Date</Text>
                                            <Text style={styles.detail}>15.07.18</Text>
                                        </View>
                                        <View style={styles.description}>
                                            <Text style={styles.label}>Expired Date</Text>
                                            <Text style={styles.detail}>22.07.18</Text>
                                        </View>
                                    </View>
                                    <View style={styles.payment}>
                                        <Image style={styles.qr} source={require('../../asset/image/qrSample.jpg')} />
                                        <View>
                                            <Text style={styles.amount}>Net Amount</Text>
                                            <Text style={styles.money}>$2.5</Text>
                                        </View>
                                    </View>
                                    <View style={styles.payment}>
                                        <Image style={styles.logo} source={require('../../asset/image/wing.png')} />
                                        <TouchableOpacity
                                            disabled={!user && true}
                                            onPress={() => this.onNext()}
                                            style={[styles.buttonPay, !user && { backgroundColor: 'rgba(0,0,0,0.5)' }]}>
                                            <Text style={styles.payText}>PayNow</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                    </View>

                </View>
                </ScrollView >
            </SafeAreaView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({

    logo: {
        width: DIMENSION(30),
        height: DIMENSION(20),
    },

    qr: {
        width: DIMENSION(25),
        height: DIMENSION(25),
    },

    amount: {
        fontSize: 16,
        fontWeight: '900',
        color: COLORS.TEXT_DARK,
    },

    money: {
        textAlign: 'right',
        fontSize: 22,
        fontWeight: '900',
        color: COLORS.RED,
    },

    buttonPay: {
        backgroundColor: COLORS.MAIN,
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 18,
    },

    payText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff'
    },

    label: {
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 5,
        color: 'rgba(0,0,0,0.5)',
    },

    detail: {
        fontSize: 16,
        fontWeight: '900',
        color: COLORS.TEXT_DARK,
    },

    tickContainer: {
        width: DIMENSION(22),
        height: DIMENSION(22),
        overflow: 'hidden',
        position: 'absolute',
        top: DIMENSION(-10),
    },

    descriptionContainer: {
        padding: 10,
        width: DIMENSION(80),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    payment: {
        padding: 10,
        width: DIMENSION(80),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    congratulationText: {
        marginTop: 5,
        fontSize: 22,
        fontWeight: '900',
        color: COLORS.TEXT_DARK
    },

    subCongratulations: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: '700',
        color: 'rgba(0,0,0,0.5)'
    },

    tickImg: {
        width: DIMENSION(22),
        height: DIMENSION(22),
    },

    card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: DIMENSION(85),
        height: DIMENSION(155),
        borderRadius: 12,
        borderWidth: 0.1,
        borderColor: '#333'
    },

    cardHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


    cardBody: {
        width: DIMENSION(80),
        height: DIMENSION(120),
    },

    container: {
        flex: 1,
        backgroundColor: '#f2f3f5',
    },
    closeIcon: {
        marginTop: DIMENSION(1),
        fontSize: 38,
        color: COLORS.RED
    },

    header: {
        width: DIMENSION(100),
        height: DIMENSION(15),
        paddingHorizontal: DIMENSION(5.5),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTittle: {
        fontSize: 28,
        fontWeight: '800',
        color: COLORS.TEXT_DARK,
    },

    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

//make this component available to the app
export default InvoiceScreen;


