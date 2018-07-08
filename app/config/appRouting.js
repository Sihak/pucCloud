import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import RegistrationRouting from "./registrationRoute";
import MeRouting from "./meRouting";
import MeScreen from "../screen/me";

const color = "#353535";
const activeColor = '#000';
const AppRouting = createBottomTabNavigator(
  {
    Register: {
      screen: RegistrationRouting,
      navigationOptions: {
        title: "Register",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <MaterialIcons
              name="dashboard"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ) : (
            <MaterialIcons
              name="dashboard"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={color}
            />
          )
      }
    },
   
    Me: {
      screen: MeRouting,
      navigationOptions: {
        title: "Me",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <MaterialIcons
              name="person"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ): (
            <MaterialIcons
              name="person"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={color}
            />
          )
      }
    },
    Menu: {
      screen: MeScreen,
      navigationOptions: {
        title: "Menu",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <MaterialIcons
              name="menu"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ) : (
            <MaterialIcons
              name="menu"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={color}
            />
          )
      }
    }
  },
  {
    removeClippedSubviews : true,
    swipeEnabled: true,
    initialRouteName: "Register",
    tabBarPosition: "bottom",
    animationEnabled: true,
    activeTintColor: activeColor,
    inActiveTintColor: color,
    tabBarOptions: {
        showLabel: true,
        showIcon: true,
        labelStyle : {
            fontSize: 13,
            fontWeight: '500'
        },
        activeTintColor : activeColor,
        style: {
            elevation: 0,
            borderTopWidth: 1,
            borderTopColor: '#F0F0F5',
            backgroundColor: '#fff',
            paddingTop: 5,
        },
        indicatorStyle: {
            backgroundColor: '#fff',
        },
    },
  }
);

export default AppRouting;