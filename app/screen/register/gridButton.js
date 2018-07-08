import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { DIMENSION, APPEARANCES } from '../../module';
class GridMenu extends Component {
    switchButton(item) {
        switch (item.name) {
            case 'thai-program':
                return (
                    <TouchableOpacity
                        onPress={() => this.props.onButton(this.props.item)}
                        style={styles.gridButton}>
                        <View style={[styles.gridIconContainer, APPEARANCES.SHADOW, { backgroundColor: this.props.item.color }]}> */}
                    <Image style={styles.buttonIcon} source={require('../../asset/image/thai-program.png')} />
                        </View>
                        <Text style={styles.buttonText}>{this.props.item.nameShow}</Text>
                    </TouchableOpacity>
                )
                break;
            case 'english-program':
                return (
                    <TouchableOpacity
                        onPress={() => this.props.onButton(this.props.item)}
                        style={styles.gridButton}>
                        <View style={[styles.gridIconContainer, APPEARANCES.SHADOW, { backgroundColor: this.props.item.color }]}> */}
                    <Image style={styles.buttonIcon} source={require('../../asset/image/english-program.png')} />
                        </View>
                        <Text style={styles.buttonText}>{this.props.item.nameShow}</Text>
                    </TouchableOpacity>
                )
                break;
            case 'japanese-program':
                return (
                    <TouchableOpacity
                        onPress={() => this.props.onButton(this.props.item)}
                        style={styles.gridButton}>
                        <View style={[styles.gridIconContainer, APPEARANCES.SHADOW, { backgroundColor: this.props.item.color }]}> */}
                    <Image style={styles.buttonIcon} source={require('../../asset/image/japanese-program.png')} />
                        </View>
                        <Text style={styles.buttonText}>{this.props.item.nameShow}</Text>
                    </TouchableOpacity>
                )
                break;
            default:
                return (
                    <TouchableOpacity
                        onPress={() => this.props.onButton(this.props.item)}
                        style={styles.gridButton}>
                        <View style={[styles.gridIconContainer, APPEARANCES.SHADOW, { backgroundColor: this.props.item.color }]}> */}
                <Image style={styles.buttonIcon} source={require('../../asset/image/chinese-program.png')} />
                        </View>
                        <Text style={styles.buttonText}>{this.props.item.nameShow}</Text>
                    </TouchableOpacity>
                )
        }

    }
    render() {
        return (
            this.switchButton(this.props.item)
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
