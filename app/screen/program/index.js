//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS, DIMENSION, APPEARANCES } from '../../module'
// create a component
class ProgramScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerTittle}> Program </Text>
                        <Ionicons style={styles.notificationIcon} name={'md-settings'} />
                    </View>
                    <View style={styles.body}>
                    
                        {/* <FlatList
                        style = {}
                        data = {}
                        keyExtractor = {(index,item) => {index.toString()}}
                        renderItem = {({index,item}) => {}}
                         /> */}
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
    },
    header: {
        width: DIMENSION(100),
        height: DIMENSION(15),
        paddingHorizontal: DIMENSION(5.5),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth:0.2,
        borderColor: '#333'
    },
    headerTittle: {
        fontSize: 26,
        fontWeight: '800',
        color: COLORS.TEXT_DARK,
    },
    notificationIcon: {
        fontSize: 32,
        fontWeight: '800',
        color: COLORS.TEXT_DARK,
    },
  
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default ProgramScreen;
