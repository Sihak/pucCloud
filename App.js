
import React, { Component } from 'react';
import AppRouting from './app/config/appRouting';
import { Provider } from 'mobx-react'
import store from './app/store';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated','Class RCTCxxModule' ,'Method `jumpToIndex`','Module RCTImageLoader']);

export default class App extends Component {

  render() {
    return (
      <Provider {...store}>
        <AppRouting />
      </Provider>
    );
  }
}

