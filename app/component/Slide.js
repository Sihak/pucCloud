//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import { COLORS, DIMENSION, APPEARANCES, ICONS } from "../module";
// create a component
class Slide extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={true}
        autoplay={true}
        dotColor={COLORS.DOT}
        activeDotColor={COLORS.ACTIVE_DOT}
        autoplayTimeout={10}
        autoplayDirection={true}
      >
        <View style={styles.slide1}>
          <Image source={ICONS.SLIDE1} style={styles.img} />
        </View>
        <View style={styles.slide2}>
          <Image source={ICONS.SLIDE2} style={styles.img} />
        </View>
        <View style={styles.slide3}>
          <Image source={ICONS.SLIDE3} style={styles.img} />
        </View>
      </Swiper>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  img: {
    flex: 1,
    alignSelf: "stretch",
    width: undefined,
    height: undefined
  },
  wrapper: {
    height: 200
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});

//make this component available to the app
export default Slide;
