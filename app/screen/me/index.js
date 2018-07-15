//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, Alert, FlatList } from 'react-native';
import { COLORS, DIMENSION, APPEARANCES } from '../../module'
import { inject, observer } from 'mobx-react';
import Ionicons from "react-native-vector-icons/Ionicons";
import LoadingComponent from '../../component/loading';

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
                            <View style={styles.detailsContainer}>
                                <Text style={[styles.detail, { marginRight: DIMENSION(3) }]}>{user.email}</Text>
                                <Text style={[styles.detail, { marginRight: DIMENSION(3) }]}>|</Text>
                                <Text style={[styles.detail, { marginRight: DIMENSION(3) }]}>{user.emailVerified ? 'Varified' : 'Unvarified Email'}
                                </Text>

                            </View>
                        </View>
                        <View style={styles.userPhotoContainer}>
                            {loading ? <LoadingComponent />
                                :
                                <Image
                                    resizeMode={'cover'}
                                    source={require('../../asset/image/user.png')}
                                    style={[styles.userImg, APPEARANCES.SHADOW]} />}
                        </View>
                        <TouchableOpacity
                            onPress={() => this.props.user.userSignOut()}
                            style={[styles.buttonSignIn, APPEARANCES.SHADOW]}>
                            <Text style={styles.buttonSignInText}>Sign Out</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={styles.ifNoUserContainer} >
                        <Image
                            resizeMode={'cover'}
                            source={require('../../asset/image/NoUser.png')}
                            style={[styles.userImg, APPEARANCES.SHADOW]} />}
                         <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('LoginSignUp',{fromMe:true})}
                            style={[styles.buttonSignIn, APPEARANCES.SHADOW,{backgroundColor:COLORS.MAIN}]}>
                            <Text style={styles.buttonSignInText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                }

            </SafeAreaView>
        );
    }
}

const imageWidthHeight = DIMENSION(55);
const styles = StyleSheet.create({

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

    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
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
        flexDirection: 'row',
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginLeft: 5,
        width: DIMENSION(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    TopContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff'
    },
    sumDetailsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
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


