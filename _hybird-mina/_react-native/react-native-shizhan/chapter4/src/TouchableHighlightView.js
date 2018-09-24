/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow TouchableHighlightView组件
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   TouchableHighlight,
   View
 } from 'react-native';


export default class TouchableHighlightView extends Component {

   render() {
     return (
     <View style={styles.container}>
     <TouchableHighlight activeopacity='0.5'  underlaycolor='red'>
      <Text style={styles.textStyle}>点击我</Text>
     </TouchableHighlight>
     </View>
     );
    }
  }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop:25,
     alignItems: 'center',
   },
   textStyle: {
     fontSize: 18,
     color:'#434343'
   },

 });

