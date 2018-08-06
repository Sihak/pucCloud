//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  findNodeHandle
} from "react-native";

import { COLORS, DIMENSION, APPEARANCES, ICONS } from "../module";
// create a component
class PrimaryCard extends Component {
  constructor(props) {
    super(props);
    this.state = { viewRef: null };
  }

  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  }

  render() {
    const { image } = this.props;
    return (
      <View style={[styles.container, APPEARANCES.SHADOW]}>
        <Image
          source={image}
          style={styles.img}
          ref={img => {
            this.backgroundImage = img;
          }}
          onLoadEnd={this.imageLoaded.bind(this)}
        />
        <View style={styles.body}>
          <Text style={styles.h5}>{'Graduate'.toUpperCase()}</Text>
          <Text style={styles.h4}>Schedule for Master Degree</Text>
          <View style={styles.rows}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>WEEK DAY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>WEEKEND</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
// define your styles
const styles = StyleSheet.create({
  buttonText: {
    fontSize: 15,
    fontWeight: "900",
    color: COLORS.WHITE
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 0.5,
    borderColor: COLORS.WHITE,
    borderRadius: 3,
    marginLeft: DIMENSION(2)
  },
  rows: {
    padding: DIMENSION(5),
    borderRadius: 15,
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  absolute: {
    position: "absolute",
    borderRadius: 5,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  body: {
    flex: 1,
    padding: DIMENSION(5),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  container: {
    height: 380,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15
  },
  img: {
    backgroundColor: "#fff",
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 15,
    justifyContent: "center"
  },
  h4: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "800",
    width: "100%",
    textAlign: "center"
  },
  h5: {
    color: "rgba(255,255,255,.9)",
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 10,
    textAlign: "center",
    width: "100%"
  }
});

//make this component available to the app
export default PrimaryCard;
