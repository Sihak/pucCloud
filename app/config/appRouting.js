import React from "react";
import { TabNavigator } from "react-navigation";
import ProgramRouting from "./programRouting";
import MeRouting from "./meRouting";
import NotificationScreen from "../screen/notification";
import MenuScreen from "../screen/menu";
import Feather from "react-native-vector-icons/Feather";

const color = "#18171D";
const activeColor = '#2089dc';
const AppRouting = TabNavigator(
  {
    Program: {
      screen: ProgramRouting,
      navigationOptions: {
        title: "Programs",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Feather
              name="home"
              size={30}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ) : (
              <Feather
                name="home"
                size={30}
                iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                color={color}
              />
            )
      }
    },

    Me: {
      screen: MeRouting,
      navigationOptions: {
        title: "Account",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Feather
              name="user"
              size={30}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ) : (
              <Feather
                name="user"
                size={30}
                iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                color={color}
              />
            )
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        title: "Notifications",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Feather
              name="bell"
              size={30}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ) : (
              <Feather
                name="bell"
                size={30}
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
            <Feather
              name="menu"
              size={30}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ) : (
              <Feather
                name="menu"
                size={30}
                iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                color={color}
              />
            )
      }
    },
  },
  {
    removeClippedSubviews: true,
    swipeEnabled: false,
    initialRouteName: "Program",
    tabBarPosition: "bottom",
    animationEnabled: true,
    activeTintColor: activeColor,
    inActiveTintColor: color,
    lazy: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      labelStyle: {
        fontSize: 12,
        color:color
      },
      activeTintColor: activeColor,
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