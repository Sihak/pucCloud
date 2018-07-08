import React, { Component } from 'react';
import { View, SafeAreaView, Dimensions, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { DIMENSION, COLORS, APPEARANCES } from '../../module/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';
import { observer, inject } from 'mobx-react';


const { width, height } = Dimensions.get('window');
@inject('auth')
@observer
class MeScreen extends Component {
    render() {
        const { user } = this.props.auth;
        const authAction = this.props.auth;
        authAction.switchProps(this.props);
        return (
            <SafeAreaView style={styles.container}>
                {
                    user ? <View style={styles.TopContainer}>
                        <View style={styles.sumDetailsContainer}>
                            <Text style={styles.userName}>{user.displayName}</Text>
                            <View style={styles.detailsContainer}>
                                <Text style={[styles.detail, { marginRight: DIMENSION(3) }]}>{user.emailVerified ? 'Varified' : 'Not Varified'}
                                </Text>
                                <Text style={[styles.detail, { marginRight: DIMENSION(3) }]}>|</Text>
                                <Text style={[styles.detail, { marginRight: DIMENSION(3) }]}>{user.email}
                                </Text>
                                <Text style={[styles.detail, { marginRight: DIMENSION(3) }]}>|</Text>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={[styles.detail, { color: COLORS.BLUE }]}>Edit</Text>
                                    <Ionicons style={[styles.interestingIcon, { color: COLORS.BLUE, marginTop: DIMENSION(2), marginLeft: DIMENSION(1), fontSize: 13 }]} name={'md-create'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.userPhotoContainer}>
                            <Image
                                resizeMode={'cover'}
                                source={require('../../asset/image/user.png')}
                                style={styles.userImg} />
                        </View>
                        <TouchableOpacity
                            onPress={() => authAction.onLogout()}
                            style={[styles.logoutButton, APPEARANCES.SHADOW]}>
                            <Text style={styles.logoutText}>Log Out</Text>
                        </TouchableOpacity>
                    </View> :
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.userPhotoContainer}>
                                <Image
                                    resizeMode={'cover'}
                                    source={require('../../asset/image/NoUser.png')}
                                    style={styles.userImg} />
                            </View>
                            <Text style={styles.lonelyText}> There's lonely here. </Text>
                            <TouchableOpacity
                                onPress={() => this.props.auth.clickLogin()}
                                style={[styles.logoutButton, APPEARANCES.SHADOW]}>
                                <Text style={styles.logoutText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                }

            </SafeAreaView>
        )
    }
}

const imageWidthHeight = DIMENSION(55);

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    TopContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff'
    },
    BottomContainer: {
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
    userPhotoContainer: {
        marginTop: DIMENSION(4),
        width: imageWidthHeight,
        height: imageWidthHeight,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: imageWidthHeight / 2,
    },
    userImg: {
        width: imageWidthHeight,
        height: imageWidthHeight,
    },
    button: {
        width: DIMENSION(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logoutButton: {
        width: DIMENSION(80),
        padding: DIMENSION(3),
        backgroundColor: COLORS.RED,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: DIMENSION(20),
    },
    logoutText:{
        fontSize: 22,
        fontWeight: '700',
        color:COLORS.TEXT
    },
    lonelyText: {
        fontSize: 18,
        fontWeight: '300',
        marginTop: 15,
    }
}

export default MeScreen;