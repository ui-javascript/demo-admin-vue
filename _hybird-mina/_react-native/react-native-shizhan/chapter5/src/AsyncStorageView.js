/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow AsyncStorageView轻量级存储使用
 */

 import React, { Component } from 'react';
 import {AppRegistry,StyleSheet,Text,AsyncStorage,View} from 'react-native';

 var Dimensions = require('Dimensions');
 var ScreenWidth = Dimensions.get('window').width;
 var keyName = 'name';
 var keyValue = '张三';

export default class AsyncStorageView extends Component {

  constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }

    //保存数据
    saveData(){
      thisData = this;
      AsyncStorage.setItem(keyName, keyValue, function (error) {
              if (error) {
                  alert('存储失败');
              } else {
                  thisData.setState({
                    data: keyValue
                })
              }
          })
  }

  loadData() {
        thisData = this;
        AsyncStorage.getItem(keyName, function (error, result) {
          if (!error) {
            alert('数据查询结果'+result);
            thisData.setState({
                data: result === null ? '数据已经删除' : result
                  })
              }
          })
      }

  //删除指定的数据
  delData(){
    thisData = this;
    AsyncStorage.removeItem(keyName, function (error) {
          if (!error) {
            thisData.setState({
            data: '数据已经删除'
            })
            }
        })
  }

   render() {
     return (
       <View style={styles.container}>

       <View style={styles.itemView}>
       <Text style={styles.itemText}
        onPress={this.saveData.bind(this)}>存储数据</Text>
       </View>

       <View style={styles.itemView}>
       <Text style={styles.itemText}
        onPress={this.loadData.bind(this)}>查询数据</Text>
       </View>

       <View style={styles.itemView}>
       <Text style={styles.itemText}
        onPress={this.delData.bind(this)}>删除数据</Text>
       </View>

        <Text style={{paddingTop:40}}>
           AsyncStorage存储的值是:{this.state.data}
         </Text>
       </View>
     );
    }
  }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop:50
   },
  itemView:{
    backgroundColor:'grey',
    height:44,
    width:ScreenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
  },
  itemText:{
    fontSize:15,
    color:'#ffffff',
    marginLeft:20,
  }

 });

