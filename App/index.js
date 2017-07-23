import React, { Component } from 'react';
import {Provider } from "react-redux";
import {
  StyleSheet,
} from 'react-native';

import getStore from "./Store";
import AppNavigation from './AppNavigation'
import TabBarNavigation from './TabBarNavigation'

class App extends React.Component {
  store = getStore();

  render() {
    return (
      <Provider store={this.store}>
        <TabBarNavigation/>
      </Provider>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    flex: 1,
    backgroundColor: '#111111'
  },
});


export default App;
