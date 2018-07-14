//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, Alert, FlatList } from 'react-native';
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
import LoadingComponent from '../../component/loading';

@inject('user', 'register')
@observer
class RegisterScreen extends Component {
    constructor() {
        super();
        this.state = {
            minimumDate: new Date(),
            seletionDateType: null,
            isDateTimePickerVisible: false,

            firstName: null,
            lastName: null,
            khmerFirstName: null,
            khmerLastName: null,
            gender: null,
            mobilePhone: null,
            email: null,
            date_of_birth: null,
            program: {},
            admission_date: null,
            description: null,
        }
    }


    componentDidMount() {
        const institute = this.props.navigation.state.params.program;
        this.props.register.fetchProgramType(institute.id)
    }

    componentWillUnmount() {
        this.props.register.programTypes = [];
    }

    _showDateTimePicker = (value) => {
        this.setState({ isDateTimePickerVisible: true, seletionDateType: value });
    };

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log(this.seletionDateType)
        if (this.state.seletionDateType == 'dob') {
            var convertedDate = moment(date).format('ll').toString()
            this.setState({ date_of_birth: convertedDate })
            this.setState({ isDateTimePickerVisible: false })
        }
        else {
            var convertedDate = moment(date).format('ll').toString()
            this.setState({ admission_date: convertedDate })
            this.setState({ isDateTimePickerVisible: false })
        }
    };


    async onNext() {
        const { firstName, lastName, khmerFirstName, khmerLastName,
            gender, date_of_birth, mobilePhone, email,
            program, admission_date, description } = this.state;
        if (firstName && lastName && khmerFirstName && khmerLastName,
            gender && date_of_birth && mobilePhone && email &&
            program.name && admission_date) {
                await this.props.register.onPreRegister(firstName, lastName, khmerFirstName, khmerLastName, gender, mobilePhone, email, date_of_birth, program, admission_date, description);
                await this.props.navigation.navigate('RegisterDetails')
        }
        else {
            Alert.alert(
                'Empty',
                'Please enter all required informations.',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            )
        }
    }



    render() {
        const { gender, admission_date, date_of_birth, program } = this.state;
        const { loading, programTypes } = this.props.register;
        const institute = this.props.navigation.state.params.program;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.loadingHandler}></View>
                <View style={styles.container}>
                    <View style={[styles.header]}>
                        <Text style={styles.headerTittle}>{institute.shortName}</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.popToTop()}
                        >
                            <Ionicons style={styles.closeIcon} name={'md-close'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.guideContainer}>
                        <Text style={styles.welvcomeWord}>

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
                                onChangeText={(value) => this.setState({ firstName: value })}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholder={'first name'}
                            />
                            <TextInput
                                editable={loading ? false : true}
                                style={[styles.textBox]}
                                onChangeText={(value) => this.setState({ lastName: value })}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholder={'last name'}
                            />
                        </View>
                        <View style={styles.textInput}>
                            <TextInput
                                editable={loading ? false : true}
                                style={[styles.textBox]}
                                onChangeText={(value) => this.setState({ khmerFirstName: value })}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholder={'khmer first name'}
                            />
                            <TextInput
                                editable={loading ? false : true}
                                style={[styles.textBox]}
                                onChangeText={(value) => this.setState({ khmerLastName: value })}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholder={'khmer last name'}
                            />
                        </View>
                        <View style={styles.textInput}>
                            <Menu
                                style={styles.picker}
                                onSelect={value => this.setState({ gender: value })}>
                                <MenuTrigger text={
                                    <Text style={[styles.pickerText, gender && { color: COLORS.TEXT_DARK }]}>{gender ? gender : 'gender'}</Text>
                                } />
                                <MenuOptions>
                                    <MenuOption style={styles.option} value={'Male'} text={'Male'} />
                                    <MenuOption style={styles.option} value={'Female'} text={'Female'} />
                                </MenuOptions>
                            </Menu>
                            <TouchableOpacity
                                onPress={() => this._showDateTimePicker('dob')}
                                style={styles.picker} >
                                <Text style={[styles.pickerText, date_of_birth && { color: COLORS.TEXT_DARK }]}>
                                    {date_of_birth ? date_of_birth : 'date of birth'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textInput}>
                            <TextInput
                                editable={loading ? false : true}
                                style={[styles.textBox]}
                                onChangeText={(value) => this.setState({ mobilePhone: value })}
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
                            <Menu
                                style={styles.picker}
                                onSelect={value => this.setState({ program: value })}>
                                <MenuTrigger text={
                                    <Text style={[styles.pickerText, program.name && { color: COLORS.TEXT_DARK }]}>{program.name ? program.name : 'program'}</Text>
                                } />
                                <MenuOptions>
                                    <FlatList
                                        data={programTypes.slice()}
                                        keyExtractor={(item, index) => index.toString()}
                                        renderItem={({ item }) => {
                                            return (
                                                <MenuOption style={styles.option} value={item.doc} text={item.doc.name} />
                                            )
                                        }}
                                    />
                                </MenuOptions>
                            </Menu>
                            <TouchableOpacity
                                onPress={() => this._showDateTimePicker('admissionDate')}
                                style={styles.picker} >
                                <Text style={[styles.pickerText, admission_date && { color: COLORS.TEXT_DARK }]}>
                                    {admission_date ? admission_date : 'admission date'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            multiline={true}
                            editable={loading ? false : true}
                            style={[styles.descriptionBox]}
                            onChangeText={(value) => this.setState({ description: value })}
                            autoCorrect={false}
                            autoCapitalize={'none'}
                            placeholder={'description'}
                        />
                        {
                            loading ? <LoadingComponent />
                                :
                                <TouchableOpacity
                                    onPress={() => this.onNext()}
                                    style={styles.buttonNext}>
                                    <Text style={styles.textButton}>Next</Text>
                                </TouchableOpacity>
                        }

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
        color: COLORS.TEXT_DARK,
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

