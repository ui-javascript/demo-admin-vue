/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';

import ArtAnimView from "./src/ArtAnimView";
import FoodView from "./src/FoodView";

export default class ARTDemo extends Component {

    render() {
        return (
           <FoodView/>
        );
    }
}

AppRegistry.registerComponent('ARTDemo', () => ARTDemo);
