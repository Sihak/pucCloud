//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { COLORS, DIMENSION, APPEARANCES } from '../../module'
// create a component
class ProgramComponent extends Component {
    render() {
        const  institute  = this.props;
        return (
            <View style={styles.program}>
                <TouchableOpacity
                onPress = {() => this.props.onPress(this.props) }
                 style={[styles.programButton, institute.background && { backgroundColor: institute.background }, APPEARANCES.SHADOW]}>
                    <MaterialIcons style={styles.programIcon} name = {institute.icon} />
                </TouchableOpacity>
                <Text style={styles.textProgram}>{institute.shortName}</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    programs: {
        padding: 5,
    },

    program: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 3,
    },

    textProgram: {
        fontSize: 14,
        fontWeight: '300',
        color: COLORS.TEXT_DARK,
    },

    programIcon: {
        fontSize: 140,
        color: 'rgba(255,255,255,1)',
    },

    programButton: {
        backgroundColor: COLORS.MAIN,
        width: DIMENSION(44.5),
        height: DIMENSION(44.5),
        marginHorizontal: DIMENSION(1),
        marginVertical: DIMENSION(2),
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default ProgramComponent;
