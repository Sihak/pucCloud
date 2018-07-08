import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { COLORS, DIMENSION, APPEARANCES } from '../../module';
import Ionicons from "react-native-vector-icons/Ionicons";
import { observer, inject } from 'mobx-react'
import GridMenu from './gridButton';


const academicProgram = {
    color: '#3C95D1',
    icon: require('../../asset/image/academic-program.png'),
    nameShow: 'Academic Program',
    name: 'academic-program',
}
@inject('gridButtons', 'auth', 'cNavigation', 'admission')
@observer
class RegisterScreen extends Component {

    componentDidMount() {
        this.props.admission.fetchPrograms();
    }

    async onRegister(item) {
        console.log(item)
        if (!this.props.auth.user) {
            await this.props.cNavigation.getGridButtonInfo(item.institute.shortName, item.institute.name, item.institute.icon, item.color);
            await this.props.auth.setFromMe(false);
            this.props.navigation.navigate('LoginSignUp');
        }
        else {
            await this.props.cNavigation.getGridButtonInfo(item.institute.shortName, item.institute.name, item.institute.icon, item.color);
            await this.props.auth.setFromMe(false);
            this.props.navigation.navigate('Form')
        }
    }

    render() {
        const { programs, loading } = this.props.admission;
        console.log(programs)
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerTittle}> Register </Text>
                        <Ionicons style={styles.notificationIcon} name={'md-notifications'} />
                    </View>
                    <View style={styles.body}>
                        <FlatList
                            // ListHeaderComponent={() => {
                            //     return (
                            //         <TouchableOpacity
                            //             onPress={() => this.onRegister(academicProgram)}
                            //             style={styles.academicButton}>
                            //             <View style={[styles.academicIconContainer, APPEARANCES.SHADOW]}>
                            //                 <Image style={styles.academicIcon} source={require('../../asset/image/academic-program.png')} />
                            //             </View>
                            //             <Text style={styles.buttonText}>{'Academic Program'}</Text>
                            //         </TouchableOpacity>
                            //     )
                            // }}
                            numColumns={2}
                            data={programs}
                            style={styles.gridMenu}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => {
                                return (<GridMenu
                                    onButton={()=>this.onRegister(item)}
                                    program={item.institute}
                                    name={item.institute.shortName}
                                />)
                            }}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
    },
    header: {
        width: DIMENSION(100),
        height: DIMENSION(10),
        paddingHorizontal: DIMENSION(5.5),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTittle: {
        fontSize: 26,
        fontWeight: '800',
        color: COLORS.TEXT_DARK,
    },
    notificationIcon: {
        fontSize: 32,
        fontWeight: '800',
        color: COLORS.TEXT_DARK,
    },
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
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default RegisterScreen;
