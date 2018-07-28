import React, { Component } from 'react';
import { COLORS, APPEARANCES, DIMENSION } from '../../module';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

class GridMenu extends Component {
    buttonPressed(value){
        this.props.buttonPressed(value)
    }
    render(){
        return(
            <View style={[styles.gridMenu]} >
            <View style={styles.row}>
                <TouchableOpacity
                 onPress = {() => this.buttonPressed('Payment')}
                 style={[styles.gridButton]} >
                    <MaterialIcons name={'payment'} style={[  styles.gridIcon]} />
                    <Text style={[styles.gridText]} > Payment </Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress = {() => this.buttonPressed('Transcript')}                
                 style={[styles.gridButton]} >
                    <MaterialIcons name={'assessment'} style={[ styles.gridIcon]} />
                    <Text style={[styles.gridText]} > Transcript </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                 onPress = {() => this.buttonPressed('Class')}                
                 style={[styles.gridButton]} >
                    <MaterialIcons name={'book'} style={[ styles.gridIcon]} />
                    <Text style={[styles.gridText]} > Class </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                 onPress = {() => this.buttonPressed('Subjects')}                
                style={[styles.gridButton]} >
                    <MaterialIcons name={'view-list'} style={[ styles.gridIcon]} />
                    <Text style={[styles.gridText]} > Subjects </Text>

                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    gridMenu: {
        marginTop: 15,
        opacity: 0.8 ,
        height: DIMENSION(50),
        width: DIMENSION(100),
    },

    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    gridButton: {
        flex: 1,
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',

    },
    gridText: {
        fontWeight: '300',
        fontSize: DIMENSION(4),
        color: '#242424' ,
    },
    gridIcon: {
        fontSize: DIMENSION(10),
        fontWeight: '300',
        color: '#242424',
        marginBottom: 5,
    }


});

export default GridMenu;