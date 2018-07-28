//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, Alert, FlatList } from 'react-native';
import { COLORS, DIMENSION, APPEARANCES } from '../../module'
import { inject, observer } from 'mobx-react';
import Ionicons from "react-native-vector-icons/Ionicons";
import LoadingComponent from '../../component/loading';

@inject('user', 'register')
@observer
class ListPrograms extends Component {
    constructor() {
        super();
        this.state = {

        }
    }


    componentDidMount() {
        const institute = this.props.navigation.state.params.program;
        this.props.register.fetchProgramType(institute.id)
    }

    componentWillUnmount() {
        this.props.register.programTypes = [];
    }


    render() {
        const { loading, programTypes, isRegistered } = this.props.register;
        const institute = this.props.navigation.state.params.program;
        if (isRegistered){
             this.props.register.changeIsRegister(false);
             this.props.navigation.popToTop()
        }
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
                    <Text style={styles.guide}>Please select your test type.</Text>
                    <View style={[styles.body, loading && { justifyContent: 'center', alignItems: 'center' }]}>
                        {loading ? <LoadingComponent />
                            :
                            <FlatList
                            keyExtractor={(item,index) => index.toString()}
                                data={programTypes}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('Register', { program: item, institute: institute })}
                                            style={styles.program}>
                                            <View style={styles.proHeader}>
                                                <Ionicons style={styles.proIcon} name={'md-link'} />
                                                <Text style={styles.programText} >{item.doc.name}</Text>
                                            </View>
                                            <Text style={styles.programDescription}>{item.doc.description}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />}

                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    program: {
        paddingHorizontal: DIMENSION(5),
        paddingVertical: DIMENSION(2),
        borderBottomWidth: 0.2,
        borderTopWidth: 0.2,
        borderColor: '#333',
    },
    proHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    programText: {
        marginLeft: 10,
        fontSize: 16,
        color: COLORS.TEXT_DARK,
        fontWeight: '900'
    },
    proIcon: {
        fontSize: 22,
        color: COLORS.MAIN,
    },
    programDescription: {
        color: 'rgba(0,0,0,0.5)',
        padding: 5,
    },
    guide: {
        fontSize: 18,
        color: 'rgba(0,0,0,0.5)',
        fontWeight: '300',
        paddingLeft: DIMENSION(6),
        marginBottom: 25,
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

    header: {
        width: DIMENSION(100),
        height: DIMENSION(15),
        paddingHorizontal: DIMENSION(5.5),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTittle: {
        fontSize: 28,
        fontWeight: '800',
        color: COLORS.TEXT_DARK,
    },

    body: {
        flex: 1,
    },

});


//make this component available to the app
export default ListPrograms;

