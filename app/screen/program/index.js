//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, DIMENSION, APPEARANCES } from '../../module';
import ProgramComponent from './program';
import { observer, inject } from 'mobx-react';
import LoadingComponent from '../../component/loading';

@inject('programs', 'user')
@observer
class ProgramScreen extends Component {

    componentDidMount() {
        this.props.programs.fetchPrograms();
    }

    onProgram(program) {
        const { user } = this.props.user;
        this.props.navigation.navigate(user ? 'Register' : 'LoginSignUp', { program: program })
    }

    render() {
        const { programs, loading } = this.props.programs;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={[styles.header]}>
                        <Text style={styles.headerTittle}> Programs </Text>
                        <Ionicons style={styles.notificationIcon} name={'md-settings'} />
                    </View>
                    <View style={styles.body}>
                        {
                            loading ? <LoadingComponent />
                                :
                                <FlatList
                                    style={styles.programs}
                                    numColumns={2}
                                    data={programs.slice()}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ index, item }) => {
                                        return (<ProgramComponent
                                            onPress={(program) => this.onProgram(program)}
                                            {...item}
                                        />)
                                    }}

                                />
                        }

                    </View>
                </View>
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
        height: DIMENSION(15),
        paddingHorizontal: DIMENSION(5.5),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.2,
        borderColor: '#333'
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

    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default ProgramScreen;
