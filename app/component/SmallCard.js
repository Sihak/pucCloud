//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS, DIMENSION, APPEARANCES, ICONS } from "../module";
// create a component
const SmallCard = props => {
  const { image,title } = props;
  return (
    <View style={[styles.container, APPEARANCES.SHADOW]}>
      <Image source={image} style={styles.img} />
      <View style={styles.body}>
        <Text style={styles.h4}>{title}</Text>
        <Text style={[styles.note]}>Start enroll from Aug 1, 2018 to Aug 10, 2018</Text>
        <View style={styles.flex1}/>
        <Text style={[styles.note,styles.subColor]}>A note to anybody still having trouble getting the text shadow to show.</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  flex1:{
flex:1,
  },
  subColor:{
  },
  note:{
    fontSize:17,
    color:'#fff',
    fontWeight:'600',
  },  
  container: {
    height:380,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15
  },
  img: {
    backgroundColor: "#fff",
    flex: 1,
    resizeMode:'cover',
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 15,
    justifyContent: "center"
  },
  body:{
    flex:1,
    padding:DIMENSION(5),
  },
  h4:{
    fontSize:32,
    fontWeight:'800',
    color:'#fff',
  }
});

//make this component available to the app
export default SmallCard;
