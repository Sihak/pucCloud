//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Platform, Image, Alert } from 'react-native';
import { COLORS, DIMENSION, APPEARANCES } from '../../module'
import { inject, observer } from 'mobx-react';
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

@inject('user')
@observer
class RegisterScreen extends Component {
    constructor() {
        super();
        this.state = {
            selectedDate: moment().format('ll'),
            isDateTimePickerVisible: false,
            minimumDate: new Date(),
            gender: null,
        }
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        var convertedDate = moment(date).format('ll').toString()
        this.setState({ selectedDate: convertedDate })
        this.setState({ isDateTimePickerVisible: false })
    };



    render() {

        const { gender } = this.state;

        const { loading } = this.props.user;
        const { institute } = this.props.navigation.state.params.program;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.loadingHandler}></View>
                <View style={styles.container}>
                    <View style={[styles.header]}>
                        <Text style={styles.headerTittle}>{institute.shortName}</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Ionicons style={styles.closeIcon} name={'md-close'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.guideContainer}>
                        <Text style={styles.welcomeWord}>

                        </Text>
                        <Text style={styles.guide}>
                            Register now to create your future today.
                    </Text>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.textInput}>
                            <TextInput
                                editable={loading ? false : true}
                                style={[styles.textBox]}
                                onChangeText={(value) => this.setState({ email: value })}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholder={'first name'}
                            />
                            <TextInput
                                editable={loading ? false : true}
                                style={[styles.textBox]}
                                onChangeText={(value) => this.setState({ email: value })}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholder={'last name'}
                            />
                        </View>
                        <View style={styles.textInput}>
                            <TextInput
                                editable={loading ? false : true}
                                style={[styles.textBox]}
                                onChangeText={(value) => this.setState({ email: value })}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholder={'khmer first name'}
                            />
                            <TextInput
                                editable={loading ? false : true}
                                style={[styles.textBox]}
                                onChangeText={(value) => this.setState({ email: value })}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholder={'khmer last name'}
                            />
                        </View>
                        <View style={styles.textInput}>
                            <Menu
                                style={styles.picker}
                                onSelect={value => this.setState({gender:value})}>
                                <MenuTrigger text={
                                    <Text style={styles.pickerText}>{gender?gender:'gender'}</Text>
                                } />
                                <MenuOptions>
                                    <MenuOption value={'Male'} text={<Text style = {styles.option} >Male</Text>} />
                                    <MenuOption value={'Female'} text={<Text style = {styles.option} >Female</Text>} />
                                </MenuOptions>
                            </Menu>
                            <TouchableOpacity
                                onPress={() => this._showDateTimePicker()}
                                style={styles.picker} >
                                <Text style={styles.pickerText}>
                                    {this.state.selectedDate ? this.state.selectedDate : 'date of birth'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textInput}>
                            <TextInput
                                editable={loading ? false : true}
                                style={[styles.textBox]}

                                onChangeText={(value) => this.setState({ email: value })}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholder={'mobile phone'}
                            />
                            <TextInput
                                editable={loading ? false : true}
                                style={[styles.textBox]}

                                onChangeText={(value) => this.setState({ email: value })}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholder={'email address'}
                            />
                        </View>
                        <View style={styles.textInput}>
                            <TextInput
                                editable={loading ? false : true}
                                style={[styles.textBox]}

                                onChangeText={(value) => this.setState({ email: value })}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholder={'program'}
                            />
                            <TextInput
                                editable={loading ? false : true}
                                style={[styles.textBox]}
                                onChangeText={(value) => this.setState({ email: value })}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholder={'adminission date'}
                            />
                        </View>
                        <TextInput
                            multiline={true}
                            editable={loading ? false : true}
                            style={[styles.descriptionBox]}
                            onChangeText={(value) => this.setState({ email: value })}
                            autoCorrect={false}
                            autoCapitalize={'none'}
                            placeholder={'description'}
                        />
                        <TouchableOpacity style={styles.buttonNext}>
                            <Text style={styles.textButton}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={(date) => this._handleDatePicked(date)}
                    onCancel={() => this._hideDateTimePicker()}
                />
            </SafeAreaView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    option:{
        fontSize: 14,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
    },
    textInputIcon: {
        fontSize: 24,
        color: COLORS.TEXT_DARK,
        marginTop: DIMENSION(2.5),
    },

    buttonNext: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: DIMENSION(5),
    },

    textButton: {
        fontSize: 32,
        color: COLORS.MAIN,
    },

    textInput: {
        paddingHorizontal: DIMENSION(2),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textBox: {
        paddingHorizontal: DIMENSION(1),
        width: DIMENSION(44),
        height: DIMENSION(10),
        fontSize: 18,
        fontWeight: '300',
        marginLeft: DIMENSION(2),
        borderBottomWidth: 0.3,
        marginTop: DIMENSION(2)
    },
    descriptionBox: {
        width: DIMENSION(88),
        height: DIMENSION(30),
        marginTop: DIMENSION(10),
        fontSize: 18,
        fontWeight: '300',
        borderWidth: 0.3,
        padding: DIMENSION(2),
        borderRadius: DIMENSION(2)

    },
    closeIcon: {
        fontSize: 38,
        color: COLORS.RED
    },
    guideContainer: {
        paddingHorizontal: DIMENSION(8)
    },
    welcomeWord: {
        fontSize: 32,
        fontWeight: '300',
        color: COLORS.TEXT_DARK,
    },
    guide: {
        fontSize: 28,
        color: 'rgba(0,0,0,0.5)',
        fontWeight: '300'
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
        fontSize: 32,
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
    picker: {
        justifyContent: 'center',
        paddingHorizontal: DIMENSION(1),
        width: DIMENSION(44),
        height: DIMENSION(10),
        marginLeft: DIMENSION(2),
        borderBottomWidth: 0.3,
        marginTop: DIMENSION(2),
    },
    pickerText: {
        fontSize: 18,
        fontWeight: '300',
        color: 'rgba(0,0,0,0.26)'
    }
});

//make this component available to the app
export default RegisterScreen;

