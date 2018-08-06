//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, DIMENSION, APPEARANCES, ICONS } from "../module";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ListCard = props => {
  const { color, text, title, icon } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.h5}>{"Association".toUpperCase()}</Text>
      <Text style={styles.h4}>Schedule for Association Program</Text>
      <View style={styles.body}>
        <TouchableOpacity style={styles.rows}>
          <LinearGradient
            start={APPEARANCES.START_LINE_GRADIENT_V2}
            end={APPEARANCES.END_LINE_GRADIENT_V2}
            colors={color ? color : COLORS.SCHOOL_FEE}
            style={styles.icons}
          >
          <MaterialIcons name='thumb-up' style={styles.backgroundIcon} />
          </LinearGradient>
          <View style={styles.column}>
              <Text style={styles.title}>Morning</Text>
              <Text style={styles.subtitle}>Enroll your course now!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rows}>
          <LinearGradient
            start={APPEARANCES.START_LINE_GRADIENT_V2}
            end={APPEARANCES.END_LINE_GRADIENT_V2}
            colors={color ? color : COLORS.PURPLE_LINE}
            style={styles.icons}
          >
           <MaterialIcons name='favorite' style={styles.backgroundIcon} />
          </LinearGradient>
          <View style={styles.column}>
              <Text style={styles.title}>Afternoon</Text>
              <Text style={styles.subtitle}>Enroll your course now!</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundIcon:{

  },
  subtitle:{
    fontSize:15,
    color: "rgba(0,0,0,.45)",
  },
  title:{
    color:'#111',
    fontSize:17,
    fontWeight:'600'
  },
  column:{
    flex: 1,
    // borderBottomColor:'rgba(0,0,0,.2)',
    // borderBottomWidth:0.5,
    paddingVertical:10
  },
  icons:{
    width:DIMENSION(15),
    height:DIMENSION(15),
    borderRadius:DIMENSION(50),
    marginRight: DIMENSION(5),
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundIcon:{
    color:'#fff',
    fontSize:32,
  },
  rows:{
    flexDirection:'row',
    alignItems: "center",
    marginBottom:24,
  },  
  body: {
    flex: 1
  },
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: DIMENSION(5)
  },
  h4: {
    color: "#111",
    fontSize: 26,
    fontWeight: "800",
    width: "100%",
    marginBottom: 24
  },
  h5: {
    color: "rgba(0,0,0,.45)",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
    width: "100%"
  }
});

export default ListCard;
