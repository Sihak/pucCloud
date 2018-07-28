import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, DIMENSION, APPEARANCES } from '../../module'


export default class CardPayment extends Component {


    render() {
        return (
            <TouchableOpacity
            onPress = {() => this.props.buttonPressed()}
             style={[styles.card, APPEARANCES.SHADOW]}>
                <View style={styles.cardHeader}>
                    <View>
                        <Text
                            style={styles.cardProgram} >GESL</Text>
                        <Text style={styles.cardInstitute}>English Program</Text>
                    </View>
                    <Image style={[{ width: DIMENSION(13), height: DIMENSION(13), borderRadius: 4 }]} source={require('../../asset/image/PUC_logo.png')} />
                </View>
                <View style={styles.cardBody}>
                    <Image style={styles.cardBackground} source={require('../../asset/image/unpaid.png')} />
                    <View style={styles.descriptionContainer}>
                        <View>
                            <Text style={styles.label}>Student</Text>
                            <Text style={styles.description}>Sihak Chau</Text>
                        </View>
                        <View>
                            <Text style={styles.label}>Date</Text>
                            <Text style={styles.description}>14.07.2018</Text>
                        </View>
                    </View>
                    <View style={[styles.descriptionContainer, { marginTop: 10 }]}>
                        <View>
                            <Text style={styles.label}>Net Amount</Text>
                            <Text style={[styles.description, { color: COLORS.RED, fontWeight: '900' }]}>$2.5</Text>
                        </View>
                        <View>
                            <Text style={styles.label}>Expired Date</Text>
                            <Text style={styles.description}>21.07.2018</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    card: {
        width: DIMENSION(90),
        height: DIMENSION(50),
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 0.1,
        borderColor: '#333'
    },


    cardBackground: {
        position: 'absolute',
        width: DIMENSION(35),
        height: DIMENSION(35),
        right: 15,
        opacity: 0.3,
        bottom: 0,

    },

    descriptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    description: {
        marginTop: 2.5,
        fontSize: 16,
        fontWeight: '500',
        color: '#333'
    },

    label: {
        fontSize: 12,
        fontWeight: '900',
        color: '#rgba(0,0,0,0.8)'

    },

    cardInstitute: {
        fontSize: 12,
        fontWeight: '700',
        color: '#rgba(0,0,0,0.5)'
    },
    cardProgram: {
        fontSize: 18,
        fontWeight: '900',
        fontStyle: 'italic',
        color: '#333'
    },

    cardBody: {
        paddingHorizontal: 15,
    },

    cardHeader: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});