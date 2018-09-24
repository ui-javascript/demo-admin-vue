/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow AppState状态
 */

import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,AppState} from 'react-native';


export default class AppStateApiView extends Component {

  componentWillUnmount() {
      AppState.removeEventListener('change', this.handleAppStateChange);
   }

 componentWillMount() {
       AppState.addEventListener('change', this.handleAppStateChange);
       AppState.addEventListener('memoryWarning', function(){
         console.log("内存报警....");
       });
    }

    //状态改变响应
  handleAppStateChange(appState) {
      alert('当前状态为:'+appState);
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.styleText}>
          状态监听中：
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop:25
  },
  styleText:{
    marginTop:10,
    textAlign:'center'
  },
  styleAppState:{
    marginTop:10,
    color:'red',
    textAlign:'center'
  },
});

