import {Dimensions} from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function DIMENSION (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

module.exports = DIMENSION;