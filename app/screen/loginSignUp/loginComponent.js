//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, DIMENSION, APPEARANCES } from '../../module';
import { observer, inject } from 'mobx-react';

@inject('auth')
@observer
class LoginComponent extends Component {

    render() {
        const authAction = this.props.auth;
        const { auth, user, loading, error, userName, email, password, vPassword, phoneNumber } = this.props.auth;
        authAction.switchProps(this.props.cProps);
        return (
            <View style={styles.login}>
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
                 <TouchableOpacity
                 onPress = {() => authAction.onLogin(email,password)}
                  style={[styles.submitButton, APPEARANCES.SHADOW]}>
                    <Text style={styles.submitText}>Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Forgot password?</Text>
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
        marginVertical: DIMENSION(2),
        paddingBottom: 13,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,1)',
        fontSize: 16,
    },
    submitButton: {
        marginVertical: DIMENSION(4),
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

export default LoginComponent;
