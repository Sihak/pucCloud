//import liraries
import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { COLORS, DIMENSION, APPEARANCES } from '../../module';
import { inject, observer } from 'mobx-react';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LoginComponent from './loginComponent';
import SignUpComponent from './signUpComponent';

@inject('loginSignUp')
@observer
class LoginSignUpScreen extends Component {

    render() {
        const { segmentControl } = this.props.loginSignUp;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.backContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <MaterialIcons name='clear' style={styles.backIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.logoContainer}>
                        <Image source={require('../../asset/image/PUC_logo.png')} style={styles.logo} />
                    </View>
                    <View style={styles.segment}>
                        <TouchableOpacity
                            onPress={() => this.props.loginSignUp.onSegment('login')}
                            style={[styles.segmentButton, segmentControl == 'login' && { borderBottomWidth: 2, borderColor: '#0860DE' }]}>
                            <Text style={[styles.segmentText, segmentControl == 'login' && { color: '#0860DE' }]}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.loginSignUp.onSegment('signup')}
                            style={[styles.segmentButton, segmentControl == 'signup' && { borderBottomWidth: 2, borderColor: '#0860DE' }]}>
                            <Text style={[styles.segmentText, segmentControl == 'signup' && { color: '#0860DE' }]}>Sign Up</Text>
                        </TouchableOpacity>

                    </View>

                    {
                        segmentControl == 'login' ?
                            <LoginComponent
                                cProps={this.props}
                            />
                            :
                            <SignUpComponent
                                cProps={this.props}
                            />
                    }
                </ScrollView>
            </SafeAreaView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
    },
    backContainer: {
        flex: 1,
        paddingHorizontal: DIMENSION(5),
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    backIcon: {
        fontSize: DIMENSION(8),
        color: COLORS.RED
    },
    logoContainer: {
        height: DIMENSION(38),
        width: DIMENSION(100),
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop: DIMENSION(2),
        height: DIMENSION(35),
        width: DIMENSION(35)
    },
    schoolName: {
        fontSize: DIMENSION(4.2),
        marginTop: DIMENSION(2.5),
        fontWeight: '400'
    },
    segment: {
        height: DIMENSION(18),
        width: DIMENSION(100),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: DIMENSION(10)
    },
    segmentButton: {
        marginTop: 25,
        borderColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: DIMENSION(3),
    },
    segmentText: {
        fontSize: DIMENSION(4),
        fontWeight: '500',
        color: 'rgba(0,0,0,0.5)'
    },
});

//make this component available to the app
export default LoginSignUpScreen;
