/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Heading1, Heading2, Paragraph} from './view/Text';

import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';


export default class ListViewScene extends Component {

  constructor(props) {
        super(props);
        this.state = {
            dataSource:new ListView.DataSource({
                rowHasChanged:(r1,r2) => r1!=r2,
            }),
        }
    }
  //获取本地json数据
  componentWillMount() {
      let data=require('./data/list.json');
      this.setState({
          dataSource:this.state.dataSource.cloneWithRows(data.list),
      });
    }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.recommendHeader}>
        <Heading2>猜你喜欢</Heading2>
      </View>
      <View style={styles.container}>
      <ListView style={styles.listView}
     dataSource={this.state.dataSource}
     renderRow={this.renderCell.bind(this)}
     />
      </View>
      </View>
    );
  }

  renderCell(cellData) {
       return (
          <TouchableOpacity onPress={()=>this.pressRow(cellData)}>
          <View style={styles.container}>
           <View style={styles.cellContainer}>
               <Image
                   style={styles.thumbnail}
                   source={{uri:cellData.pic}}
               />
               <View style={styles.itemCellView}>
                   <Text numberOfLines={1} style={styles.title}>{cellData.title}</Text>
                   <Text numberOfLines={1} style={styles.id}>产品编号：{cellData.id}</Text>
               </View>
           </View>
           <Text style={styles.itemDivice}/>
           </View>
           </TouchableOpacity>
       );
   }

   //点击弹框
   pressRow(data){
        alert("点击了："+data.id);
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    backgroundColor: '#FFFFFF',

  },
  cellContainer: {
         flex: 1,
         flexDirection: 'row',
     },
  cellRightContainer: {
        flex: 1,
        flexDirection: 'column',
        margin:10
  },
  recommendHeader: {
        height: 35,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#e9e9e9',
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    itemCellView: {
         flex: 1,
         backgroundColor: '#FFFFFF',
         marginLeft:10
     },
    thumbnail: {
         width: 80,
         height: 60,
         borderWidth: 1,
         borderColor: '#e9e9e9',

     },
     title: {
         fontSize: 18,
         color:'#999999',
         marginBottom: 8,
         textAlign: 'left'
     },
     id: {
         fontSize: 16,
        textAlign: 'left'
     },
     itemDivice: {
        backgroundColor: '#e9e9e9',
        height: 1,
        flex:1
     }
});

