/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';

import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    Platform,
    BackAndroid,
    View
} from 'react-native';

import HomeScreen from './demo/HomeScene';
import MineScreen from './demo/MineScene';
import NearbyScreen from './demo/NearbyScreen';
import OrderScreen from './demo/OrderScreen';

const TabNavigatorItem = TabNavigator.Item;
//默认选项
const TAB_HOME_NORMAL = require('../images/tabbar_homepage.png');
const TAB_NEARBY_NORMAL = require('../images/tabbar_nearby.png');
const TAB_ORDER_NORMAL = require('../images/tabbar_order.png');
const TAB_MINE_NORMAL = require('../images/tabbar_mine.png');
//选中
const TAB_HOME_PRESS = require('../images/tabbar_homepage_selected.png');
const TAB_NEARBY_PRESS = require('../images/tabbar_nearby_selected.png');
const TAB_ORDER_PRESS = require('../images/tabbar_order_selected.png');
const TAB_MINE_PRESS = require('../images/tabbar_mine_selected.png');

class TabNavigatorView extends Component {
    //默认选中
    constructor() {
        super();
        this.state = {
            selectedTab: 'Home',
        }
    }

    componentDidMount() {
        this.addBackAndroidListener(this.props.navigator);
    }

    componentWillUnmount() {
        this.removeBackAndroidListener();
    }

    //监听Android返回键
    addBackAndroidListener(navigator) {
        if (Platform.OS === 'android') {
            var currTime = 0;
            BackAndroid.addEventListener('hardwareBackPress', () => {
                if (!navigator) {
                    return false;
                }
                const routers = navigator.getCurrentRoutes();
                if (routers.length == 1) {
                    var nowTime = (new Date()).valueOf();
                    if (nowTime - currTime > 2000) {
                        currTime = nowTime;
                        Toast.show("再按一次退出程序");
                        return true;
                    }
                    return false;
                } else {//在其他子页面
                    navigator.pop();
                    return true;
                }
            });
        }
    }

    //移除监听
    removeBackAndroidListener() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress');
        }
    }

    //点击按钮方法
    onPress(tabName) {
        if (tabName) {
            this.setState({
                    selectedTab: tabName,
                }
            );
        }
    }

    //渲染选项卡
    renderTabView(title, tabName, defaultTab, isBadge) {
        var tabNomal;
        var tabPress;
        var tabPage;
        switch (tabName) {
            case 'Home':
                tabNomal = TAB_HOME_NORMAL;
                tabPress = TAB_HOME_PRESS;
                tabPage = <HomeScreen/>;
                break;
            case 'Nearby':
                tabNomal = TAB_NEARBY_NORMAL;
                tabPress = TAB_NEARBY_PRESS;
                tabPage = <NearbyScreen/>;
                break;
            case 'Order':
                tabNomal = TAB_ORDER_NORMAL;
                tabPress = TAB_ORDER_PRESS;
                tabPage = <OrderScreen/>;
                break;
            case 'Mine':
                tabNomal = TAB_MINE_NORMAL;
                tabPress = TAB_MINE_PRESS;
                tabPage = <MineScreen/>;
                break;
            default:
        }


        return (
            <TabNavigatorItem
                selected={this.state.selectedTab === tabName}
                title={title}
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} source={tabNomal}/>}
                renderSelectedIcon={() => <Image style={styles.icon} source={tabPress}/>}

                onPress={() => this.onPress(tabName)}
                renderBadge={() => isBadge ?
                    <View style={styles.badgeView}><Text style={styles.badgeText}>15</Text></View> : null}
                >
                <View style={styles.page}>
                    {tabPage}
                </View>
            </TabNavigatorItem>
        );
    }

    //自定义TabView
    tabBarView() {
        return (
            <TabNavigator
                tabBarStyle={styles.tab}>
                {this.renderTabView('首页', 'Home', HomeScreen, false)}
                {this.renderTabView('附件', 'Nearby', NearbyScreen, false)}
                {this.renderTabView('订单', 'Order', OrderScreen, false)}
                {this.renderTabView('我的', 'Mine', MineScreen, false)}
            </TabNavigator>
        );
    }

    //渲染界面
    render() {
        var tabView = this.tabBarView();
        return (
            <View style={styles.container}>
                {tabView}
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        fontSize: 10,
        color: 'black'
    },
    selectedTabText: {
        fontSize: 10,
        color: 'green'
    },
    tabIcon: {
        width: 25,
        height: 25,
    },
    badgeView: {
        width: 22,
        height: 14,
        backgroundColor: '#f85959',
        borderWidth: 1,
        marginLeft: 10,
        marginTop: 3,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    badgeText: {
        color: '#ffffff',
        fontSize: 8,
    },
    icon: {
        width: 22,
        height: 22
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
});

export default TabNavigatorView;
