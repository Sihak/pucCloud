
import React, { Component } from 'react';
import AppRouting from './app/config/appRouting';
import { Provider } from 'mobx-react'
import store from './app/store';
import { YellowBox } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class App extends Component {

  render() {
    return (
      <Provider {...store}>
      <MenuProvider>
        <AppRouting />
      </MenuProvider>
      </Provider>
    );
  }
}

