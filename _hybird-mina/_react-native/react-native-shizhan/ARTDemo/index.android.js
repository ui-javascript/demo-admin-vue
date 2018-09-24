/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import LineView from "./src/LineView";

export default class ARTDemo extends Component {
  render() {
      return (

          <LineView/>

      );
  }
}

AppRegistry.registerComponent('ARTDemo', () => ARTDemo);
