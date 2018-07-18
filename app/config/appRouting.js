import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ProgramRouting from "./programRouting";
import MeRouting from "./meRouting";
import NotificationScreen from "../screen/notification";
import MenuScreen from "../screen/menu";

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
    Notification: {
      screen: NotificationScreen,
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
      screen: MenuScreen,
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
    swipeEnabled: false,
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