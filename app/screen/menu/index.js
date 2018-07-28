//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, Alert, FlatList } from 'react-native';
import { COLORS, DIMENSION, APPEARANCES } from '../../module'
import { inject, observer } from 'mobx-react';
import Ionicons from "react-native-vector-icons/Ionicons";

@inject('user', 'register')
@observer
class MenuScreen extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        const { user } = this.props.user;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.loadingHandler}></View>
                <View style={styles.container}>
                    <View style={[styles.header]}>
                        <Text style={styles.headerTittle}>Menu</Text>
                    </View>
                    <View style={styles.body}>
                    <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.user.userSignOut()}>
                            <Ionicons style={styles.buttonIcon} name={'md-people'} />
                            <Text style  = {styles.buttonText}>About Us</Text>
                        </TouchableOpacity>
                    <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.user.userSignOut()}>
                            <Ionicons style={styles.buttonIcon} name={'md-settings'} />
                            <Text style  = {styles.buttonText}>Setting</Text>
                        </TouchableOpacity>
                      {
                          user&&
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.user.userSignOut()}>
                            <Ionicons style={styles.buttonIcon} name={'md-close'} />
                            <Text style  = {styles.buttonText}>Log out</Text>
                        </TouchableOpacity>
                      }  
                    </View>
                    <View style = {styles.versionContainer}>
                        <Text>Version: 1.0.0</Text>
                    </View>
                </View>
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
    },
    button:{
        paddingVertical: DIMENSION(1),
        paddingHorizontal: DIMENSION(5.5),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'#fff',
        marginBottom: 5,
        borderBottomWidth: 0.2,
        borderColor: 'rgba(0,0,0,0.5)',
    },
    buttonIcon:{
        fontSize:28,
        marginRight:DIMENSION(2),
        color: COLORS.TEXT_DARK
    },
    buttonText:{
        color: COLORS.TEXT_DARK,
        fontSize:18,
        fontWeight: '300',
    },
    versionContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }

});

//make this component available to the app
export default MenuScreen;


