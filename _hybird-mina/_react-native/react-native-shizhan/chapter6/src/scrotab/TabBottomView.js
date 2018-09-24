/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow react-native-scrollable-tab-view 底部切换
 */

import React, {Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBottom from '../component/TabBottom';
import HomeScreen from './HomeScreen';
import MineScreen from './MineScreen';

const tabTitles = ['首页', '我的'];
//默认图标
const tabIcon = [
    require('../images/tabbar_homepage.png'),
    require('../images/tabbar_mine.png'),
];
//选中图标
const tabSelectedIcon = [
    require('../images/tabbar_homepage_selected.png'),
    require('../images/tabbar_mine_selected.png'),
];

export default class TabBottomView extends Component {

    onChangeTabs = ({i}) => 'light-content';

    render() {
        return (
            <ScrollableTabView
                renderTabBar={() =>
                    <TabBottom
                        tabNames={tabTitles}
                        tabIconNames={tabIcon}
                        selectedTabIconNames={tabSelectedIcon}/>}
                tabBarPosition='bottom'
                onChangeTab={this.onChangeTabs}>

                <HomeScreen  navigator={this.props.navigator}/>
                <MineScreen  navigator={this.props.navigator}/>

            </ScrollableTabView>
        );
    }
}


