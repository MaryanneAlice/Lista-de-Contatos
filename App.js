/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {Router, Scene, Modal} from 'react-native-router-flux';


import Login from './components/Login'
import Home from './components/Home'
import SalvarContato from './components/SalvarContato'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Modal>
          <Scene hideNavBar={true} key='login' component={Login}/>
          <Scene key='home' component={Home}/>
          <Scene key='salvarContato' component={SalvarContato}/>
        </Modal>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
});
