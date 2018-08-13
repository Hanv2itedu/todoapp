import React, { Component } from 'react';
import { Provider } from 'react-redux';
import HomePage from './app/container/HomePage';
import store from './app/store';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  componentDidMount(){
    SplashScreen.hide();
  }
  render(){
    return(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}

