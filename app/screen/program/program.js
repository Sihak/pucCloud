//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { COLORS, DIMENSION, APPEARANCES } from '../../module';

// create a component
class ProgramComponent extends Component {
    render() {
        const institute = this.props;
        return (
            <View style={styles.program}>
                <TouchableOpacity
                    onPress={() => this.props.onPress(this.props)}
                    style={[APPEARANCES.SHADOW, styles.programButton, institute.background && { backgroundColor: institute.background }]}>
                    <MaterialIcons style={styles.programIcon} name={institute.icon} />
                    <Text style={styles.textProgram}>{institute.shortName}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    textProgram: {
        fontSize: 16,
        fontWeight: '300',
        color: '#fff',
    },

    programIcon: {
        marginBottom:10,
        fontSize: DIMENSION(22),
        color: 'rgba(255,255,255,1)',
    },

    programButton: {
        marginHorizontal: 5,
        marginBottom: 5,
        backgroundColor: COLORS.MAIN,
        width: DIMENSION(42.5),
        height: DIMENSION(42.5),
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.1,
        borderColor: '#333',
    },
    program: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    }
});
export default ProgramComponent;
