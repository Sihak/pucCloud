//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { COLORS, DIMENSION, APPEARANCES } from '../../module'
import { inject, observer } from 'mobx-react';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

@inject('user')
@observer
class LoginSignUp extends Component {
    constructor() {
        super();
        this.state = {
            textboxFocused: '',
            type: 'signin',
            isSignin: true,
            isSignup: false,
            email: null,
            password: null,
            vPassword: null,
        }
    }

    async onButton(value) {
        const { email, password, vPassword } = this.state;
        await this.setState({ type: value })
        if (this.state.type == 'signin') {
            if (this.state.isSignin) {
                if (!email && !password) {
                    Alert.alert(
                        'Empty',
                        'Please enter all required information.',
                        [
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ],
                        { cancelable: false }
                    )
                }
                else {
                    await this.props.user.signInUser(email, password, (success, response) => {
                        if (success) {
                            this.navigate()
                        }
                        else{
                            alert(response)
                        }
                    })
                }
            } else {
                this.setState({ isSignin: true, isSignup: false })
            }
        }
        else {
            if (this.state.isSignup) {
                if (email && password && vPassword) {
                    if (password != vPassword) {
                        Alert.alert(
                            'Review Password',
                            'Your password is not matched',
                            [
                                { text: 'OK', onPress: () => console.log('OK Pressed') },
                            ],
                            { cancelable: false }
                        )
                    }
                    else {
                        this.props.user.signupUser(email, password, (success, response) => {
                            if (success) {
                                this.navigate()
                            }
                        });
                    }
                }
                else {
                    Alert.alert(
                        'Empty',
                        'Please enter all required information.',
                        [
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ],
                        { cancelable: false }
                    )
                }

            } else {
                this.setState({ isSignup: true, isSignin: false })
            }
        }
    }

    async navigate() {
        if (this.props.navigation.state.params.fromMe) {
            this.props.navigation.goBack();
        }
        else {
            await this.props.navigation.popToTop();
            this.props.navigation.navigate('Register', { program: this.props.navigation.state.params.program });
        }
    }

    errorHandler() {
        const { error } = this.props.user;
        return (error)
    }

    render() {
        const { loading } = this.props.user;
        return (
            <KeyboardAwareScrollView style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.loadingHandler}></View>
                    <View style={styles.container}>
                        <View style={[styles.header]}>
                            <Text style={styles.headerTittle}> PUC Student </Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.popToTop()}
                            >
                                <Ionicons style={styles.closeIcon} name={'md-close'} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.guideContainer}>
                            <Text style={styles.welcomeWord}>
                                Welcome,
                    </Text>
                            <Text style={styles.guide}>
                                {this.state.type == 'signin' ? 'sign in' : 'sign up'} to continue.
                    </Text>
                        </View>
                        <View style={styles.body}>
                            {
                                loading ? <Image source={require('../../asset/image/loading.gif')} style={styles.logo} />
                                    :
                                    <Image source={require('../../asset/image/PUC_logo.png')} style={styles.logo} />
                            }
                            <View style={styles.textInput}>
                                <Text style={styles.label}>Email</Text>
                                <TextInput
                                    editable={loading ? false : true}
                                    style={[styles.textBox]}
                                    onFocus={() => this.setState({ textboxFocused: 'sEmail' })}
                                    onEndEditing={() => this.setState({ textboxFocused: '' })}
                                    onChangeText={(value) => this.setState({ email: value })}
                                    autoCorrect={false}
                                    autoCapitalize={'none'}
                                    placeholder={'enter your email'}
                                />
                            </View>
                            <View style={styles.textInput}>
                                <Text style={styles.label}>Password</Text>
                                <TextInput
                                    editable={loading ? false : true}
                                    style={[styles.textBox]}
                                    onFocus={() => this.setState({ textboxFocused: 'sPassword' })}
                                    onEndEditing={() => this.setState({ textboxFocused: '' })}
                                    onChangeText={(value) => this.setState({ password: value })}
                                    autoCorrect={false}
                                    autoCapitalize={'none'}
                                    secureTextEntry={true}
                                    placeholder={'enter password'}
                                />
                            </View>
                            {
                                this.state.type == 'signup' &&
                                <View style={styles.textInput}>
                                    <Text style={styles.label}>Varify</Text>
                                    <TextInput
                                        editable={loading ? false : true}
                                        style={[styles.textBox]}
                                        onFocus={() => this.setState({ textboxFocused: 'sVarifyPassword' })}
                                        onEndEditing={() => this.setState({ textboxFocused: '' })}
                                        onChangeText={(value) => this.setState({ vPassword: value })}
                                        autoCorrect={false}
                                        autoCapitalize={'none'}
                                        secureTextEntry={true}
                                        placeholder={'varify password'}
                                    />
                                </View>


                            }

                            <View style={[styles.buttonContainer, { flexDirection: 'column' }]}>
                                <View style={[styles.buttonContainer, { alignItems: 'center' }]}>
                                    <TouchableOpacity
                                        disabled={loading && true}
                                        onPress={() => this.onButton('signin')}
                                        style={styles.button}>
                                        <Text style={[styles.buttonText, this.state.type == 'signin' && { color: COLORS.MAIN }]}> Sign in </Text>
                                    </TouchableOpacity>
                                    <Text style={styles.split}>|</Text>
                                    <TouchableOpacity
                                        disabled={loading && true}
                                        onPress={() => this.onButton('signup')}
                                        style={styles.button}>
                                        <Text style={[styles.buttonText, this.state.type == 'signup' && { color: COLORS.MAIN }]}> Sign up </Text>
                                    </TouchableOpacity>
                                </View>
                                {
                                    this.state.type == 'signin' &&
                                    <Text style={[styles.forgotPWD]}> forgot password </Text>

                                }
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </KeyboardAwareScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    failSignupContainer: {
        padding: DIMENSION(5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    failtText: {
        color: COLORS.RED,
        fontSize: 16,
        textAlign: 'center'
    },
    failContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: DIMENSION(5),
        width: DIMENSION(100),
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
    },
    textInputIcon: {
        flexDirection: 'row',
        fontSize: 24,
        color: COLORS.TEXT_DARK,
        marginTop: DIMENSION(2.5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotPWD: {
        fontSize: 22,
        fontWeight: '300',
        textAlign: 'right',
        marginRight: DIMENSION(3.2)
    },
    buttonContainer: {
        width: DIMENSION(100),
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: DIMENSION(2),

    },
    closeIcon: {
        fontSize: 38,
        color: COLORS.RED
    },
    split: {
        fontSize: 38,
        fontWeight: '300'
    },
    buttonText: {
        fontSize: 32,
        fontWeight: '300',
        color: 'rgba(0,0,0,.5)',
    },
    textInput: {
        paddingVertical: DIMENSION(2),
        paddingHorizontal: DIMENSION(6),
        width: DIMENSION(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        marginTop:DIMENSION(4),
        width: DIMENSION(40),
        height: DIMENSION(40),
        marginBottom: DIMENSION(5)
    },
    textBox: {
        color: COLORS.TEXT_DARK,
        paddingHorizontal: DIMENSION(1),
        width: DIMENSION(50),
        height: DIMENSION(10),
        fontSize: 18,
        fontWeight: '300',
    },
    guideContainer: {
        paddingHorizontal: DIMENSION(7.5)
    },
    welcomeWord: {
        fontSize: DIMENSION(8),
        fontWeight: '300',
        color: COLORS.TEXT_DARK,
    },
    guide: {
        fontSize: DIMENSION(5),
        color: 'rgba(0,0,0,0.5)',
        fontWeight: '300'
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
        fontSize: DIMENSION(8),
        fontWeight: '800',
        color: COLORS.TEXT_DARK,
    },

    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        marginLeft: DIMENSION(3),
        width: DIMENSION(30),
        fontSize: 16,
        fontWeight: '700',
        color: '#333'
    },

});

//make this component available to the app
export default LoginSignUp;
