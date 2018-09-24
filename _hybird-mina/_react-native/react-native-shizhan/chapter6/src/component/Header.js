/**
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import { View, Text,StyleSheet} from 'react-native';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

class Header extends Component {

    render() {
        return (
          <View style={styles.container}>
           <Text style={styles.text }>{this.props.text || "标题头"}</Text>
          <Text style={styles.diviceLine}/>
         </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      width:ScreenWidth,
      marginTop:20,
      height:50,
      alignItems:'center', /*水平居中*/
      justifyContent:'center',/*垂直居中*/
      backgroundColor: '#FFFFFF',
      flexDirection:'column'
    },
    text: {
        fontSize: 18,
        color:'#000000',
        textAlign:'center'
    },
    diviceLine: {
        backgroundColor: '#e9e9e9',
        height: 1,
     }

});

export default Header;
