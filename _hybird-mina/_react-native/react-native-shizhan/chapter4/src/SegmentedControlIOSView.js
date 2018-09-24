/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow SegmentedControlIOS组件
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   SegmentedControlIOS,
   View
 } from 'react-native';

 var Dimensions = require('Dimensions');
 var ScreenWidth = Dimensions.get('window').width;

class SegmentedControlIOSView extends Component {

   render() {
     return (
     <View style={styles.container}>
         <Text style={styles.text}>
           SegmentedControlIOS使用实例
         </Text>
           <SegmentedControlIOS
            style={styles.segmentedStyle}
            values={['Android', 'iOS','Java','React']}
            tintColor='gray'
            selectedIndex={1}
            onValueChange={(value)=> alert('选中了：'+value)}/>
      </View>
     );
    }
  }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop:20
   },
   segmentedStyle: {
     marginTop:20,
     margin:10,
     height:30,
     width:300,
     alignSelf:'center'
   },
   text: {
     alignSelf:'center',
     marginTop:20,
   },
 });

export default SegmentedControlIOSView;
