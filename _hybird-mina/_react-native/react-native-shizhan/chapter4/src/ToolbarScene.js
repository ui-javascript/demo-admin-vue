/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow ToolbarAndroid组件
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   ToolbarAndroid,
 } from 'react-native';

 var Dimensions = require('Dimensions');
 var ScreenWidth = Dimensions.get('window').width;

export default class ToolbarScene extends Component {

   render() {
     return (
       <ToolbarAndroid
       style={styles.toolbar}
       logo={require('./image/back_icon.png')}
       title="首页"
       actions={[{title: '扫一扫', show: 'never'},{title: '添加好友', show: 'never'}]}
       onActionSelected={this.onActionSelected}
       />
     );
    }
  }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop:20
   },
   toolbar: {
     height:50,
     width:ScreenWidth,
   },
 });

