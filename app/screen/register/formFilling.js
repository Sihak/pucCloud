//import liraries
import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { COLORS, DIMENSION, APPEARANCES } from '../../module';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ActionSheet from 'react-native-actionsheet'
import { inject, observer } from 'mobx-react'
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';


@inject('cNavigation', 'register')
@observer
class FormFilling extends Component {
    showGenderActionSheet = (type) => {
        switch (type) {
            case 'gender': return (this.genderActionSheet.show())
                break;
            case 'program': return (this.programActionSheet.show())
        }
    }

    render() {
        const genders = [
            'Cancel',
            'Male',
            'Female',
        ];
        const { selectedGender, dateOfBirth, selectedProgram, isDateTimePickerVisible } = this.props.register;
        const { nameShow, loading, name } = this.props.cNavigation;
        const registerAction = this.props.register;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.headerContainer}>
                        <View style={styles.headerTittleContainer}>
                            <Text style={styles.headerTittle}> Registration form </Text>
                            <Text style={styles.subTittleHeader}> {(nameShow).toUpperCase()} </Text>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <MaterialIcons name='clear' style={styles.backIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.login}>
                        <TextInput
                            placeholder={'Khmer name'}
                            placeholderTextColor={'rgba(0,0,0,0.6)'}
                            style={styles.textInput}
                            onChangeText={(value) => registerAction.enterData(value,'khmerName')}

                        />
                        <TextInput
                            placeholder={'English name'}
                            placeholderTextColor={'rgba(0,0,0,0.6)'}
                            style={styles.textInput}
                            onChangeText={(value) => registerAction.enterData(value,'englishName')}

                        />
                        <TouchableOpacity
                            onPress={() => this.showGenderActionSheet('gender')}
                            style={styles.genderSelection}>
                            <Text style={[styles.textField, selectedGender && { color: '#333' }]}>{selectedGender ? selectedGender : 'Select Gender'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress = {() => registerAction.onShowDateTime()}
                        style={styles.genderSelection}>
                            <Text style={[styles.textField,dateOfBirth&&{color:'#333'}]}>{dateOfBirth?dateOfBirth:'Date of Birth'}</Text>
                        </TouchableOpacity>
                        <TextInput
                            placeholder={'Mobile phone'}
                            placeholderTextColor={'rgba(0,0,0,0.6)'}
                            style={styles.textInput}
                            onChangeText={(value) => registerAction.enterData(value,'mobilePhone')}

                        />
                        <TextInput
                            placeholder={'Email address'}
                            placeholderTextColor={'rgba(0,0,0,0.6)'}
                            style={styles.textInput}
                            onChangeText={(value) => registerAction.enterData(value,'email')}

                        />
                        <TouchableOpacity
                        onPress={() => this.showGenderActionSheet('program')}                        
                         style={styles.genderSelection}>
                            <Text style={[styles.textField, selectedProgram && { color: '#333' }]}>{selectedProgram ? selectedProgram : 'Select Program'}</Text>
                        </TouchableOpacity>
                        <TextInput
                            placeholder={'Adminission date'}
                            placeholderTextColor={'rgba(0,0,0,0.6)'}
                            style={styles.textInput}
                            onChangeText={(value) => registerAction.enterData(value,'administrationDate')}

                        />
                        <TextInput
                            multiline={true}
                            placeholder={'Description'}
                            placeholderTextColor={'rgba(0,0,0,0.6)'}
                            style={styles.textInput}
                            onChangeText={(value) => registerAction.enterData(value,'descrption')}

                        />
                        <TouchableOpacity
                            onPress={() => registerAction.registerForClass(name)}
                            style={[styles.submitButton, APPEARANCES.SHADOW]}>
                            <Text style={styles.submitText}>NEXT</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <ActionSheet
                    ref={o => this.genderActionSheet = o}
                    title={'Select Gender'}
                    options={genders}
                    destructiveButtonIndex={1}
                    onPress={(index) => { registerAction.enterData(index == 1 ? 'Male' : 'Female', 'gender') }}
                    cancelButtonIndex={0}
                />
                <ActionSheet
                    ref={o => this.programActionSheet = o}
                    title={'Select Program'}
                    options={registerAction.getPrograms(name)}
                    destructiveButtonIndex={1}
                    onPress={({index}) => { console.log(item)}}
                    cancelButtonIndex={0}
                />
                 <DateTimePicker
                    maximumDate={new Date()}
                    isVisible={isDateTimePickerVisible}
                    onConfirm={(date) => registerAction.enterData(moment(date).format('ll').toString(),'dateOfBirth')}
                    onCancel={() => registerAction.onHideDateTime()}
                />
            </SafeAreaView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    genderSelection: {
        width: DIMENSION(80),
        marginVertical: DIMENSION(2.3),
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,1)',
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
    },
    headerContainer: {
        flexDirection: 'row',
        flex: 1,
        paddingHorizontal: DIMENSION(5),
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: DIMENSION(5),
    },
    backIcon: {
        fontSize: DIMENSION(8),
        color: COLORS.RED
    },
    login: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
    },
    textInput: {
        width: DIMENSION(80),
        marginVertical: DIMENSION(2.3),
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,1)',
        fontSize: 16,
    },
    submitButton: {
        marginVertical: DIMENSION(2),
        backgroundColor: '#0860DE',
        width: DIMENSION(80),
        height: DIMENSION(12),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textField: {
        color: 'rgba(0,0,0,0.6)',
        fontSize: 16,
    },
    submitText: {
        color: COLORS.TEXT,
        fontSize: 16,
        fontWeight: '800'
    },
    headerTittle: {
        fontSize: 22,
        fontWeight: '300',
        color: COLORS.TEXT_DARK,
    },
    subTittleHeader: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: '900',
        color: 'rgba(0,0,0,0.7)',
        letterSpacing: 4,
    }
});

//make this component available to the app
export default FormFilling;
