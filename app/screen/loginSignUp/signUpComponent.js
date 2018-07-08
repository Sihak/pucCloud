//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, DIMENSION, APPEARANCES } from '../../module';
import { observer, inject } from 'mobx-react';

@inject('auth')
@observer
class SignUpComponent extends Component {
    render() {
        const authAction = this.props.auth;
        const { auth, user, loading, error, userName, email, password, vPassword, phoneNumber } = this.props.auth;
        authAction.switchProps(this.props.cProps);
        return (
            <View style={styles.login}>
                <TextInput
                    placeholder={'username'}
                    placeholderTextColor={'rgba(0,0,0,0.6)'}
                    style={styles.textInput}
                    onChangeText={(value) => authAction.enterUserName(value)}
                />
                 <TextInput
                    placeholder={'phone number'}
                    placeholderTextColor={'rgba(0,0,0,0.6)'}
                    style={styles.textInput}
                    onChangeText={(value) => authAction.enterPhoneNumber(value)}
                />
                <TextInput
                    autoCapitalize={'none'}
                    placeholder={'email'}
                    placeholderTextColor={'rgba(0,0,0,0.6)'}
                    style={styles.textInput}
                    onChangeText={(value) => authAction.enterEmail(value)}
                />
                <TextInput
                    autoCapitalize={'none'}
                    secureTextEntry={true}
                    placeholder={'password'}
                    placeholderTextColor={'rgba(0,0,0,0.6)'}
                    style={styles.textInput}
                    onChangeText={(value) => authAction.enterPassword(value)}

                />
                <TextInput
                    autoCapitalize={'none'}
                    secureTextEntry={true}
                    placeholder={'varify password'}
                    placeholderTextColor={'rgba(0,0,0,0.6)'}
                    style={styles.textInput}
                    onChangeText={(value) => authAction.varifyPassword(value)}

                />
                <TouchableOpacity
                    onPress={() => authAction.onSignUp(email, password, userName, phoneNumber)}
                    style={[styles.submitButton, APPEARANCES.SHADOW]}>
                    <Text style={styles.submitText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    login: {
        height: DIMENSION(80),
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: DIMENSION(80),
        marginVertical: DIMENSION(4),
        paddingBottom: 13,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,1)',
        fontSize: 16,
    },
    submitButton: {
        marginVertical: DIMENSION(2),
        backgroundColor: '#0860DE',
        width: DIMENSION(80),
        height: DIMENSION(12),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    submitText: {
        color: COLORS.TEXT,
        fontSize: 16,
        fontWeight: '800'
    }
});

//make this component available to the app
export default SignUpComponent;
