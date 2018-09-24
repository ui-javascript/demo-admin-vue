/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import SegmentedControlIOSView from "./src/SegmentedControlIOSView";


export default class chapter4 extends Component {
  render() {
    return (
     <SegmentedControlIOSView/>
    );
  }
}


AppRegistry.registerComponent('chapter4', () => chapter4);
