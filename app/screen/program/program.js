//import liraries
import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ProgramSvg,{Cloud,Product,SunGlasses,Dropper,Device,Education} from "../../component/svgIcon";

import { COLORS, DIMENSION, APPEARANCES } from "../../module";

// create a component
class ProgramComponent extends Component {
  render() {
    const institute = this.props;
    const { svg } = this.props;

    return (
      <View style={styles.program}>
        <TouchableOpacity
          onPress={() => this.props.onPress(this.props)}
          style={[
            APPEARANCES.SHADOW,
            styles.programButton,
            institute.background && { backgroundColor: institute.background }
          ]}
        >
          {svg === "ProgramSvg" ? <ProgramSvg /> : 
          svg==='Cloud'?<Cloud />:
          svg==='SunGlasses'?<SunGlasses/>:
          svg==='Product'?<Product />:
          svg==='Dropper'?<Dropper/>:
          svg==='Device'?<Device/>:
          <ProgramSvg />}
          <Text style={styles.textProgram}>{institute.shortName}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  svg: {
    width: "100%"
  },
  textProgram: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.PRIMARY_TEXT
  },

  programIcon: {
    marginBottom: 10,
    fontSize: DIMENSION(22),
    color: COLORS.TEXT_DARK
  },

  programButton: {
    marginBottom: 5,
    backgroundColor: COLORS.GRID_BACKGROUND,
    width: DIMENSION(42.5),
    height: DIMENSION(42.5),
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.1,
    borderColor: "#333"
  },
  program: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,  
    //

  }
});
export default ProgramComponent;
