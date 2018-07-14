import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import ProgramScreen from "../screen/program";
import ProgramRouting from "./programRouting";
import { COLORS } from '../module'
import MeScreen from "../screen/me";

const color = "rgba(0,0,0,0.5)";
const activeColor = '#333';
const AppRouting = TabNavigator(
  {
    Program: {
      screen: ProgramRouting,
      navigationOptions: {
        title: "Program",
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
      screen: MeScreen,
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
    Notification: {
      screen: ProgramScreen,
      navigationOptions: {
        title: "Notification",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <MaterialIcons
              name="notifications"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ) : (
            <MaterialIcons
              name="notifications"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={color}
            />
          )
      }
    },
    Menu: {
      screen: ProgramScreen,
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
    },
  },
  {
    removeClippedSubviews : true,
    swipeEnabled: true,
    initialRouteName: "Program",
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