//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import { COLORS, DIMENSION, APPEARANCES } from '../module'

const IconButton = (props) => {
  const { icon } = props
  return (
    <TouchableOpacity>
      <Feather style={styles.icons} name={icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icons: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.TEXT_DARK,
  }
});
export default IconButton;
