/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import {
    AppRegistry,
    StyleSheet,
} from 'react-native';
import PasswordLoginView from './login/PasswordLoginView';
import MobileLoginView from './login/MobileLoginView';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

class TabLoginView extends Component {
    render() {
        return (
            <ScrollableTabView
                style={styles.container}
                renderTabBar={() => <DefaultTabBar />}
                tabBarUnderlineStyle={styles.lineStyle}
                tabBarActiveTextColor='#dc1466'>

                <PasswordLoginView style={styles.textStyle} tabLabel='账号密码登录'/>
                <MobileLoginView style={styles.textStyle} tabLabel='手机验证登录'/>

            </ScrollableTabView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    lineStyle: {
        width: ScreenWidth / 2,
        height: 2,
        backgroundColor: '#dc1466',
    },
    textStyle: {
        flex: 1,
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
    },

});

export default TabLoginView;
