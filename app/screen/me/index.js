//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import { COLORS, DIMENSION, APPEARANCES } from '../../module'
import { inject, observer } from 'mobx-react';
import Ionicons from "react-native-vector-icons/Ionicons";
import LoadingComponent from '../../component/loading';
import GridMenu from './menu';

@inject('user', 'register')
@observer
class MeScreen extends Component {
    constructor() {
        super();
        this.state = {
            isNameEdit: false,
            newName: null,
        }
    }


    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onEdit() {
        if (this.state.isNameEdit) {
            this.setState({ isNameEdit: false })
        }
        else {
            this.setState({ isNameEdit: true })
            this.refs['name'].focus()
        }
    }

    onSubmit() {
        this.props.user.upDateDisplayName(this.state.newName)
    }

    render() {
        const { user, loading } = this.props.user;
        return (
            <SafeAreaView style={styles.container}>
                {user ?
                    <View style={styles.TopContainer}>
                        <View style={styles.sumDetailsContainer}>
                            <View style={styles.userContainer}>
                                <View style={styles.userPhotoContainer}>
                                    {loading ? <LoadingComponent />
                                        :
                                        <Image
                                            resizeMode={'cover'}
                                            source={require('../../asset/image/user.png')}
                                            style={[styles.userImg]} />}
                                </View>
                                <View style={styles.nameContainer}>
                                    <TextInput
                                        autoCorrect={false}
                                        ref='name'
                                        editable={this.state.isNameEdit}
                                        style={styles.userName}
                                        placeholder={user.displayName ? user.displayName : 'Me'}
                                        placeholderTextColor={this.state.isNameEdit ? COLORS.BLUE : '#333'}
                                        onChangeText={(value) => this.setState({ newName: value })}
                                        onSubmitEditing={() => this.onSubmit()}
                                    />
                                    <TouchableOpacity
                                        onPress={() => this.onEdit()}
                                        style={styles.button}>
                                        <Text style={[styles.detail, { color: COLORS.BLUE }]}>Edit</Text>
                                        <Ionicons style={[styles.interestingIcon, { color: COLORS.BLUE, marginTop: DIMENSION(2), marginLeft: DIMENSION(1), fontSize: 13 }]} name={'md-create'} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.detailsContainer}>
                                <Text style={[styles.detail, { marginRight: DIMENSION(3) }]}>{user.email}</Text>
                                <Text style={[styles.detail, { marginRight: DIMENSION(3) }]}>|</Text>
                                <Text style={[styles.detail, { marginRight: DIMENSION(3) }]}>{user.emailVerified ? 'Varified' : 'Unvarified Email'}
                                </Text>

                            </View>
                        </View>
                        <View style={styles.studyInfoContainer} >
                            <View style={styles.studyInfo}>
                                <Text style = {styles.studyInfoDetail}>3.63</Text>
                                <Text style = {styles.studyInfoLabel}>GPA</Text>
                            </View>
                            <View style={styles.studyInfo}>
                                <Text style = {styles.studyInfoDetail}>32</Text>
                                <Text style = {styles.studyInfoLabel}>Subjects</Text>
                            </View>
                            <View style={styles.studyInfo}>
                                <Text style = {styles.studyInfoDetail}>8</Text>
                                <Text style = {styles.studyInfoLabel}>Subjects Left</Text>
                            </View>
                        </View>
                        <GridMenu
                        buttonPressed = {(value) => this.props.navigation.navigate(value)}
                         />
                        <View style = {styles.carouselContainer}>
                            <Text style = {styles.carouselLabel}>Sugestion</Text>
                        </View>
                    
                    </View>
                    :
                    <View style={styles.ifNoUserContainer} >
                        <Image
                            resizeMode={'cover'}
                            source={require('../../asset/image/NoUser.png')}
                            style={[styles.userImg, APPEARANCES.SHADOW]} />}
                         <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('LoginSignUp', { fromMe: true })}
                            style={[styles.buttonSignIn, APPEARANCES.SHADOW, { backgroundColor: COLORS.MAIN }]}>
                            <Text style={styles.buttonSignInText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                }

            </SafeAreaView>
        );
    }
}

const imageWidthHeight = DIMENSION(15);
const styles = StyleSheet.create({
    carouselLabel:{
        fontSize:22,
        marginHorizontal:10,
        fontWeight:'800',
        color: '#333'
    },
    carouselContainer :{
        paddingVertical:15
    },

    GridMenu:{
        justifyContent:'center',
        alignItems: 'center',
    },
    studyInfoContainer:{
        flexDirection: 'row',
        borderColor: 'rgba(0,0,0,0.5)',
        borderBottomWidth: 0.2,
        borderTopWidth: 0.2,
        justifyContent:'space-around'
    },

    studyInfo:{
        marginVertical:10,
        width:DIMENSION(25),
        justifyContent:'center',
        alignItems:  'center',
    },

    studyInfoDetail:{
        color: COLORS.TEXT_DARK,
        fontSize:27,
        fontWeight:'400'
    },

    studyInfoLabel:{
        color: 'rgba(0,0,0,0.4)',
        fontSize:12,
        fontWeight:'800'
    },


    buttonSignIn: {
        width: DIMENSION(78),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: DIMENSION(5),
        padding: 10,
        backgroundColor: COLORS.RED,
        borderRadius: 16,
    },

    buttonSignInText: {
        fontSize: 16,
        color: '#fff'
    },

    ifNoUserContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    userContainer: {
        flexDirection: 'row',
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    closeIcon: {
        marginTop: DIMENSION(1),
        fontSize: 38,
        color: COLORS.RED
    },
    userImg: {
        width: imageWidthHeight,
        height: imageWidthHeight,
    },
    userPhotoContainer: {
        marginTop: DIMENSION(4),
        width: imageWidthHeight,
        height: imageWidthHeight,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: imageWidthHeight / 2,
    },
    nameContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: DIMENSION(3.5),
        marginLeft: 15,

    },
    header: {
        width: DIMENSION(100),
        height: DIMENSION(15),
        paddingHorizontal: DIMENSION(5.5),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.2,
        borderColor: '#333'
    },
    headerTittle: {
        fontSize: 28,
        fontWeight: '800',
        color: COLORS.TEXT_DARK,
    },

    body: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: DIMENSION(5)
    },
    button: {
        marginLeft: 5,
        width: DIMENSION(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    TopContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sumDetailsContainer: {
        paddingVertical: DIMENSION(7),
        paddingHorizontal: DIMENSION(5),
        alignItems: 'center',
        backgroundColor: '#fff',

    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userName: {
        fontSize: DIMENSION(8),
        fontWeight: '900',
        color: '#333'
    },
    detail: {
        marginTop: DIMENSION(2),
        fontSize: DIMENSION(3.5),
        fontWeight: '800',
        color: '#333'
    },

});

//make this component available to the app
export default MeScreen;


