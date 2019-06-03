/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { createAppContainer } from "react-navigation";
import reducer from './redux/reducer';
import AppNavigator from './navigator';
import middleware from './redux/middleware';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  constructor(props) {
    super(props);
    const store = createStore(reducer,{},middleware);
    console.log("store.getState", store.getState());
    this.store = store;
  }
  render() {
    return (
      <Provider store={this.store}>
        <AppContainer />
      </Provider>
    );
  }
}
