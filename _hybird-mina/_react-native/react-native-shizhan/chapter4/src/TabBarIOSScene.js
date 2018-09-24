/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   TabBarIOS,
   View
 } from 'react-native';


class TabBarIOSScene extends Component {

  constructor(props){
    super(props);
    this.state={
         selectedTab: '历史',
       notifCount: 0,
       presses: 0,
    };
  }

  renderContent(pageText: string, num?: number) {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>第 {num} 次重复渲染{pageText}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>
          TabBarIOS使用实例
        </Text>
        <Text style={styles.itemDivice}/>
        <TabBarIOS
        style={{flex:1,alignItems:"flex-end"}}
        tintColor="white"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          systemIcon="history"
          selected={this.state.selectedTab === '历史'}
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          onPress={() => {
            this.setState({
              selectedTab: '历史',
              notifCount: this.state.notifCount + 1,
            });
          }}
          >
          {this.renderContent('历史记录', this.state.notifCount)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
           systemIcon="downloads"
           selected={this.state.selectedTab === '下载'}
            onPress={() => {
            this.setState({
              selectedTab: '下载',
              pressesCount: this.state.presses + 1
            });
          }}>
           {this.renderContent('下载页面', this.state.pressesCount)}
        </TabBarIOS.Item>

      </TabBarIOS>
      </View>
    );
  }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop:20
   },
   head: {
     fontSize: 20,
     textAlign: 'center',
     paddingVertical:10
   },
   tabContent: {
       flex: 1,
       alignItems: 'center',
     },
    tabText: {
       color: 'gray',
       margin: 50,
     },
     itemDivice: {
        backgroundColor: '#e9e9e9',
        height: 1,
     }
 });

export default TabBarIOSScene;
