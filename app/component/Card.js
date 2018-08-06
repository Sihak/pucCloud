//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, DIMENSION, APPEARANCES, ICONS } from "../module";
import LinearGradient from "react-native-linear-gradient";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

// create a component
const Card = props => {
  const { color, text,title, icon } = props;
  return (
    <View style={[styles.container, APPEARANCES.SHADOW]}>
      <LinearGradient
        start={APPEARANCES.START_LINE_GRADIENT_V2}
        end={APPEARANCES.END_LINE_GRADIENT_V2}
        colors={color ? color : COLORS.SCHOOL_FEE}
        style={styles.body}
      >
        <Text style={styles.h5}>{title}</Text>
        <Text style={styles.h4}>{text}</Text>
        <SimpleLineIcons name={icon} style={styles.backgroundIcon} />
      </LinearGradient>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  flex1:{
    flex:1,
  },
  rows:{
    flexDirection:'row',
    flex:1,
  },  
  backgroundIcon: {
    fontSize: 120,
    color: "rgba(255,255,255,.56)",
    position: "absolute",
    right:DIMENSION(-5),
    bottom:DIMENSION(-5),
  },
  container: {
    height: 150,
    width: DIMENSION(80),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginRight: DIMENSION(5),
    borderRadius: APPEARANCES.CARD_RADIUS
  },
  body: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: "100%",
    padding: APPEARANCES.CARD_PENDING,
    borderRadius: APPEARANCES.CARD_RADIUS
  },
  h4: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
    width:DIMENSION(50),
  },
  h5: {
    color: "rgba(255,255,255,.9)",
    fontSize: 15,
    fontWeight: "500",
    marginBottom: DIMENSION(3),
  }
});

//make this component available to the app
export default Card;
