/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow ToolbarAndroid组件,只能在Android环境下使用
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   Image,
   ViewPagerAndroid,
   View
 } from 'react-native';


export default class ViewPagerAndroidView extends Component {

  constructor(){
         super();
         this.state={
           tabIndex:0,
         }
       }

  //页面切换时执行
  onPageScroll=(event)=>{
    this.setState({pagePosition:event.nativeEvent.position,
            offset:event.nativeEvent.offset});
    }

   render() {
     return (
     <View style={styles.container}>
    <ViewPagerAndroid
    onPageScroll={this.onPageScroll}
    style={{height:200,width:500}}  >
    <View>
        <Image
            style={{height:200,width:500}}
            source={{uri:'http://p1.so.qhimgs1.com/dmfd/326_204_/t014a9280f55313598d.jpg'}}/>
    </View>
    <View>
        <Image
            style={{height:200,width:500}}
            source={{uri:'http://p1.so.qhimgs1.com/sdr/1365_768_/t013a5b13b26f53e9a1.jpg'}}/>
    </View>
    <View>
      <Image
        style={{height:200,width:500}}
          source={{uri:'http://p4.so.qhimgs1.com/sdr/1365_768_/t0175e724d3dc217114.jpg'}}/>
    </View>
    </ViewPagerAndroid>
     <Text style={styles.text}>当前第 {this.state.pagePosition} 页</Text>
    </View>
     );
    }
  }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop:20
   },
   text: {
     flex:1,
     alignSelf:'center',
     marginTop:20,
   },
 });

