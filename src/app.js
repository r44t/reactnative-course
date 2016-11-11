import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCoYk-hjK2Oj1PWzJSnqV1jHVI2DQyRwDk',
      authDomain: 'auth-ff31d.firebaseapp.com',
      databaseURL: 'https://auth-ff31d.firebaseio.com',
      storageBucket: 'auth-ff31d.appspot.com',
      messagingSenderId: '597471903946'
    });
  }
  render() {
    return (
      <View>
      <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
