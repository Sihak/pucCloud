import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { DIMENSION, APPEARANCES, COLORS } from '../../module';
class GridMenu extends Component {

    render() {
        const { onButton, program, backgroundColor,name } = this.props
        let bgColor = COLORS.MAIN;
        if (backgroundColor)
            bgColor = backgroundColor;
        return (
            <TouchableOpacity
                onPress={() => onButton(program)}
                style={styles.gridButton}>
                <View style={[styles.gridIconContainer, APPEARANCES.SHADOW, { backgroundColor: bgColor }]}>
                    <Image style={styles.buttonIcon} source={require('../../asset/image/thai-program.png')} />
                </View>
                <Text style={styles.buttonText}>{name}</Text>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    gridMenu: {
        flex: 1,
    },
    gridButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: DIMENSION(40),
        width: DIMENSION(40),
        marginTop: DIMENSION(4.5),
        marginHorizontal: DIMENSION(3),
        borderRadius: 20,
        marginBottom: DIMENSION(2)
    },
    academicButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    academicIconContainer: {
        backgroundColor: '#3C95D1',
        justifyContent: 'center',
        alignItems: 'center',
        height: DIMENSION(40),
        width: DIMENSION(85.5),
        marginTop: DIMENSION(4.5),
        marginHorizontal: DIMENSION(3),
        borderRadius: 20,
        marginBottom: DIMENSION(2),
    },
    academicIcon: {
        width: DIMENSION(28),
        height: DIMENSION(28),
    },
    buttonIcon: {
        width: DIMENSION(28),
        height: DIMENSION(20),
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '300',
    },
});

//make this component available to the app
export default GridMenu;
