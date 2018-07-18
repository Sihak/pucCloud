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

    renderItemSplitter(){
        return(
            <View style = {{paddingVertical:DIMENSION(2)}}></View>
        )
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
                                            style={[styles.userImg, APPEARANCES.SHADOW]} />}
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
                        <FlatList 
                            style={styles.body}
                            ItemSeparatorComponent = {() => this.renderItemSplitter()}
                            keyExtractor={(item,index) => index.toString()}
                            data={[1,2,3]}
                            renderItem={({ item }) => {
                                return(
                                    <View style={[styles.card, APPEARANCES.SHADOW]}>
                                    <View style={styles.cardHeader}>
                                        <View>
                                            <Text
                                                style={styles.cardProgram} >GESL</Text>
                                            <Text style={styles.cardInstitute}>English Program</Text>
                                        </View>
                                        <Image style={[{ width: DIMENSION(13), height: DIMENSION(13), borderRadius: 4 }]} source={require('../../asset/image/PUC_logo.png')} />
                                    </View>
                                    <View style={styles.cardBody}>
                                        <Image style = {styles.cardBackground} source = {require('../../asset/image/receipt.png')} />
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
                                        <View style={[styles.descriptionContainer, {marginTop:10}]}>
                                            <View>
                                                <Text style={styles.label}>Net Amount</Text>
                                                <Text style={[styles.description,{color:COLORS.RED,fontWeight:'900'}]}>$2.5</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.label}>Expired Date</Text>
                                                <Text style={styles.description}>21.07.2018</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                )
                            }}
                        />
                      
                        {/* <TouchableOpacity
                            onPress={() => this.props.user.userSignOut()}
                            style={[styles.buttonSignIn, APPEARANCES.SHADOW]}>
                            <Text style={styles.buttonSignInText}>Sign Out</Text>
                        </TouchableOpacity> */}
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

const imageWidthHeight = DIMENSION(10);
const styles = StyleSheet.create({

    card: {
        overflow: 'hidden',
        width: DIMENSION(90),
        height: DIMENSION(50),
        backgroundColor: '#fff',
        borderRadius: 12,
    },


    cardBackground:{
        position: 'absolute',
        width: DIMENSION(35),
        height: DIMENSION(35),
        right:15,
        opacity: 0.3,

    },

    descriptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    description: {
        marginTop:2.5,
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
        backgroundColor: '#f2f3f5',

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
        backgroundColor: '#f2f3f5',
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
        backgroundColor: '#fff'
    },
    sumDetailsContainer: {
        paddingVertical: DIMENSION(7),
        paddingHorizontal: DIMENSION(5),
        alignItems: 'center',
        backgroundColor: '#f2f3f5',

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


