//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { COLORS, DIMENSION, APPEARANCES } from '../../module'
import { inject, observer } from 'mobx-react';
import Ionicons from "react-native-vector-icons/Ionicons";
import moment from 'moment';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import LoadingComponent from '../../component/loading';
@inject('user', 'register')
@observer
class ConfirmPayment extends Component {
    constructor() {
        super();
        this.state = {
            fullName: null,
            accountCode:null,
            pinCode: null,
        }
    }


    componentDidMount() {

    }

    componentWillUnmount() {
    }

    async onDone(isConfirm) {
        const { fullName, accountCode, pinCode } = this.state;
        if (isConfirm) {
            if (fullName && accountCode &&
                pinCode) {
                await this.props.navigation.goBack();
                //data
            } else {
                Alert.alert(
                    'Empty',
                    'Please enter all required informations.',
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
                )
            }
        } else {
            await this.props.navigation.goBack();
        }
    }

    render() {
        const { user } = this.props.user;
        const { loading } = this.props.register;
        return (
            <KeyboardAwareScrollView style ={styles.container}>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={[styles.header]}>
                        <Text style={styles.headerTittle}>Pay Invoice</Text>
                        <TouchableOpacity
                            onPress={() => this.onDone()}>
                            <Ionicons style={styles.closeIcon} name={'md-close'} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.guide}>Please enter your information to confirm payment.</Text>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../../asset/image/wing.png')} />
                    </View>
                    <View style={styles.body}>
                        <View style={styles.textInput}>
                            <Text style={styles.label}>Full Name</Text>
                            <TextInput
                                editable={loading ? false : true}
                                style={[styles.textBox]}
                                onChangeText={(value) => this.setState({ khmerName: value })}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholder={'your full name'}
                            />
                        </View>
                        <View style={styles.textInput}>
                            <Text style={styles.label}>Account Code</Text>
                            <TextInput
                                editable={loading ? false : true}
                                style={[styles.textBox]}
                                onChangeText={(value) => this.setState({ englishName: value })}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholder={'enter account code'}
                            />
                        </View>

                        <View style={styles.textInput}>
                            <Text style={styles.label}>Pin Code</Text>
                            <TextInput
                                secureTextEntry = {true}
                                editable={loading ? false : true}
                                style={[styles.textBox]}
                                onChangeText={(value) => this.setState({ mobilePhone: value })}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholder={'enter your pin code'}
                            />
                        </View>

                        {
                            loading ? <LoadingComponent />
                                :
                                <TouchableOpacity
                                    disabled={!user && true}
                                    onPress={() => this.onDone(true)}
                                    style={[styles.buttonNext, !user && { backgroundColor: 'rgba(0,0,0,.5)' }]}>
                                    <Text style={styles.textButton}>Confirm</Text>
                                </TouchableOpacity>
                        }
                    </View>
                </View>
            </SafeAreaView>
            </KeyboardAwareScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    option: {
        padding: 15
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
    },
    textInputIcon: {
        fontSize: 24,
        color: COLORS.TEXT_DARK,
        marginTop: DIMENSION(2.5),
    },

    buttonNext: {
        width: DIMENSION(75),
        justifyContent: 'center',
        alignItems: 'center',
        padding: DIMENSION(2),
        backgroundColor: COLORS.MAIN,
        marginTop: DIMENSION(6),
        borderRadius: 32,
    },

    textButton: {
        fontSize: 24,
        color: COLORS.MAIN,
        fontWeight: '600',
        color: '#fff',
    },
    logoContainer: {
        marginTop: DIMENSION(10),
        width: DIMENSION(100),
        height: DIMENSION(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: DIMENSION(45),
        height: DIMENSION(30),
    },
    textInput: {
        paddingVertical: DIMENSION(2),
        paddingHorizontal: DIMENSION(6),
        width: DIMENSION(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 0.2,
        borderColor: 'rgba(0,0,0,0.5)'
    },

    label: {
        width: DIMENSION(40),
        fontSize: 16,
        fontWeight: '700',
        color: '#333'
    },

    textBox: {
        color: COLORS.TEXT_DARK,
        paddingHorizontal: DIMENSION(1),
        width: DIMENSION(50),
        height: DIMENSION(10),
        fontSize: 18,
        fontWeight: '300',
    },
    textInPicker: {
        paddingVertical: DIMENSION(2),
        width: DIMENSION(100),
        backgroundColor: '#fff',
        fontSize: 18,
        color: 'rgba(0,0,0,0.18)'

    },

    closeIcon: {
        fontSize: 38,
        color: COLORS.RED
    },

    guide: {
        fontSize: 18,
        color: 'rgba(0,0,0,0.5)',
        fontWeight: '300',
        paddingLeft: DIMENSION(6),
        marginBottom: 25
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
        fontSize: 32,
        fontWeight: '800',
        color: COLORS.TEXT_DARK,
    },

    body: {
        marginTop: DIMENSION(20),
        flex: 1,
        alignItems: 'center'
    },
});

//make this component available to the app
export default ConfirmPayment;

