//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, Alert, FlatList } from 'react-native';
import { COLORS, DIMENSION, APPEARANCES } from '../../module'
import { inject, observer } from 'mobx-react';
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePicker from 'react-native-modal-datetime-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ActionSheet from 'react-native-actionsheet'
import moment from 'moment';
import { validateEmail } from '../../store/utilities'
import LoadingComponent from '../../component/loading';

const options = [
    'Male',
    'Female',
]
@inject('user', 'register')
@observer
class RegisterScreen extends Component {
    constructor() {
        super();
        this.state = {
            minimumDate: new Date(),
            seletionDateType: null,
            isDateTimePickerVisible: false,

            nameKh: null,
            nameEng: null,
            gender: null,
            mobile_phone: null,
            email_address: null,
            dob: null,

        }
    }


    componentDidMount() {
    }

    componentWillUnmount() {
    }

    _showDateTimePicker = (value) => {
        this.setState({ isDateTimePickerVisible: true, seletionDateType: value });
    };

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        if (this.state.seletionDateType == 'dob') {
            var convertedDate = moment(date).format('ll').toString()
            this.setState({ dob: convertedDate })
            this.setState({ isDateTimePickerVisible: false })
        }
        else {
            var convertedDate = moment(date).format('ll').toString()
            this.setState({ admission_date: convertedDate })
            this.setState({ isDateTimePickerVisible: false })
        }
    };

    

    async onRegister() {
        const { institute  } = this.props.navigation.state.params;
        const { nameKh, nameEng, gender, dob, mobile_phone, email_address } = this.state;
        const { program } = this.props.navigation.state.params;
        if (nameKh && nameEng &&
            gender && dob && mobile_phone.length >= 8 && email_address ) {
                // await this.props.register.createTest(nameEng,nameKh,gender,dob,institute.shortName,email_address,mobile_phone,institute.id);
                await this.props.navigation.navigate('Invoice')
        }
        else {
            Alert.alert(
                'Informations Required',
                'Please enter all required informations properly.',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            )
        }
    }


    emailValidation(unValidatedEmail){
        this.setState({
            email_address:validateEmail(unValidatedEmail)
        })
    }



    showActionSheet = () => {
        this.ActionSheet.show()
    }

    render() {
        const { user } = this.props.user;
        const { loading } = this.props.register;
        const { gender, dob } = this.state;
        const { institute, program } = this.props.navigation.state.params;
        return (
            <KeyboardAwareScrollView style={[styles.container]}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.container}>
                        <View style={[styles.header]}>
                            <Text style={styles.headerTittle}>{institute.shortName}</Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.popToTop()}
                            >
                                <Ionicons style={styles.closeIcon} name={'md-arrow-back'} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.guide}>Please enter your information.</Text>
                        <View style={styles.body}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}
                                style={styles.textInput} >
                                <Text style={styles.label}>Selected Program</Text>
                                <Text style={[styles.textInPicker, { color: COLORS.MAIN }]}>{program.doc.name}</Text>
                            </TouchableOpacity>
                            <View style={styles.textInput}>
                                <Text style={styles.label}>Khmer Name</Text>
                                <TextInput
                                    editable={loading ? false : true}
                                    style={[styles.textBox]}
                                    onChangeText={(value) => this.setState({ nameKh: value })}
                                    autoCorrect={false}
                                    autoCapitalize={'none'}
                                    placeholder={'your khmer name'}
                                />
                            </View>
                            <View style={styles.textInput}>
                                <Text style={styles.label}>English Name</Text>
                                <TextInput
                                    editable={loading ? false : true}
                                    style={[styles.textBox]}
                                    onChangeText={(value) => this.setState({ nameEng: value })}
                                    autoCorrect={false}
                                    autoCapitalize={'none'}
                                    placeholder={'your english name'}
                                />
                            </View>
                            <TouchableOpacity
                                onPress={this.showActionSheet}
                                style={styles.textInput} >
                                <Text style={styles.label}>Gender</Text>
                                <Text style={[styles.textInPicker, gender && { color: COLORS.TEXT_DARK }]}>{gender ? gender : 'gender'}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => this._showDateTimePicker('dob')}
                                style={styles.textInput} >
                                <Text style={styles.label}>Birthday</Text>
                                <Text style={[styles.textInPicker, dob && { color: COLORS.TEXT_DARK }]}>{dob ? dob : 'select date of birth'}</Text>
                            </TouchableOpacity>
                            <View style={styles.textInput}>
                                <Text style={styles.label}>Mobile Phone</Text>
                                <TextInput
                                    editable={loading ? false : true}
                                    style={[styles.textBox]}
                                    onChangeText={(value) => this.setState({ mobile_phone: value })}
                                    autoCorrect={false}
                                    autoCapitalize={'none'}
                                    placeholder={'your mobile phone'}
                                    keyboardType = {'phone-pad'}
                                />
                            </View>
                            <View style={styles.textInput}>
                                <Text style={styles.label}>Email</Text>
                                <TextInput
                                    editable={loading ? false : true}
                                    style={[styles.textBox]}
                                    onChangeText={(value) => this.emailValidation( value )}
                                    autoCorrect={false}
                                    autoCapitalize={'none'}
                                    placeholder={'your email'}
                                    keyboardType = {'email-address'}

                                />
                            </View>

                            {
                                loading ? <LoadingComponent />
                                    :
                                    <TouchableOpacity
                                        disabled={!user && true}
                                        onPress={() => this.onRegister()}
                                        style={[styles.buttonNext, !user && { backgroundColor: 'rgba(0,0,0,.5)' }]}>
                                        <Text style={styles.textButton}>Register</Text>
                                    </TouchableOpacity>
                            }
                        </View>
                    </View>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={(date) => this._handleDatePicked(date)}
                        onCancel={() => this._hideDateTimePicker()}
                    />
                    <ActionSheet
                        ref={o => this.ActionSheet = o}
                        title={'select your gender?'}
                        options={options}
                        onPress={(index) => { this.setState({ gender: index == 0 ? 'Male' : 'Female' }) }}
                    />
                </SafeAreaView>
            </KeyboardAwareScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    option: {
        padding: 15
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
        width: DIMENSION(75),
        justifyContent: 'center',
        alignItems: 'center',
        padding: DIMENSION(2),
        backgroundColor: COLORS.MAIN,
        marginTop: DIMENSION(6),
        borderRadius: 32,
    },

    textButton: {
        fontSize: 26,
        color: COLORS.MAIN,
        fontWeight: '600',
        color: '#fff',
    },

    textInput: {
        paddingVertical: DIMENSION(2),
        paddingHorizontal: DIMENSION(6),
        width: DIMENSION(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 0.2,
        borderColor: 'rgba(0,0,0,0.5)'
    },

    label: {
        width: DIMENSION(40),
        fontSize: 16,
        fontWeight: '700',
        color: '#333'
    },

    textBox: {
        color: COLORS.TEXT_DARK,
        paddingHorizontal: DIMENSION(1),
        width: DIMENSION(50),
        height: DIMENSION(10),
        fontSize: 18,
        fontWeight: '300',
    },
    textInPicker: {
        paddingVertical: DIMENSION(2),
        width: DIMENSION(100),
        backgroundColor: '#fff',
        fontSize: 18,
        color: 'rgba(0,0,0,0.18)'

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

    welcomeWord: {
        fontSize: 32,
        fontWeight: '300',
        color: COLORS.TEXT_DARK,
    },
    guide: {
        fontSize: 18,
        color: 'rgba(0,0,0,0.5)',
        fontWeight: '300',
        paddingLeft: DIMENSION(6),
        marginBottom: 25
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
});

//make this component available to the app
export default RegisterScreen;

