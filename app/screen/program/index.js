//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLORS, DIMENSION, APPEARANCES } from '../../module';
import ProgramComponent from './program';
import { observer, inject } from 'mobx-react';
import LoadingComponent from '../../component/loading';

@inject('programs', 'user')
@observer
class ProgramScreen extends Component {

    componentDidMount() {
        this.props.programs.fetchPrograms();
        this.props.user.getCurrentUser();
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
                        <MaterialIcons style={styles.notificationIcon} name={'account-circle'} />
                    </View>
                    <View style={[styles.body, loading && { justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }]}>
                        {
                            loading ? <LoadingComponent />
                                :
                                <FlatList
                                    numColumns={2}
                                    style={[styles.programs, APPEARANCES.SHADOW]}
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
    programs: {
        flex: 1,
        padding: 15,
    },

    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
        alignItems: 'center',
        justifyContent: 'center',

    },
    header: {
        width: DIMENSION(100),
        height: DIMENSION(15),
        paddingHorizontal: DIMENSION(5.5),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderBottomWidth: 0.2,
        // borderColor: '#333'
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
    },
});
export default ProgramScreen;
