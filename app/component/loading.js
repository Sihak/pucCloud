//import liraries
import React, { Component } from 'react';
import { Image, StyleSheet} from 'react-native';
import { COLORS, DIMENSION, APPEARANCES } from '../module'

class LoadingComponent extends Component {
    render() {
        return (
            <Image source={require('../asset/image/loading.gif')} style={styles.logo} />
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        width: DIMENSION(40),
        height: DIMENSION(40),
        marginBottom: DIMENSION(5),
    },
 
});

//make this component available to the app
export default LoadingComponent;
