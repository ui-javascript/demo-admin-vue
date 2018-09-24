/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow 美团首页
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    ListView,
    StatusBar,
    View
} from 'react-native';
import { Heading1, Heading2, Paragraph } from '../component/Text'
import RefreshListView, { RefreshState } from '../component/RefreshListView'

import ActionBar from '../component/ActionBar'
import BannerView from '../component/BannerView'

import MenuView from './MenuView'
import SpacingView from '../component/SpacingView'
import GridView from './GridView'
import RecommendCell from './RecommendCell'
import api from '../config/api'


var Dimensions = require('Dimensions');
var screen = Dimensions.get('window');

export default class HomeScene extends Component {

    state: {
        discounts: Array<Object>,
        dataSource: ListView.DataSource
    }

    constructor(props: Object) {
        super(props)
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.state = {
            discounts: [],
            dataSource: ds.cloneWithRows([]),
        }
    }

    componentDidMount() {
       // this.requestDiscount();
        this.refs.listView.startHeaderRefreshing();
    }

    requestData() {
        this.requestDiscount()
        this.requestRecommend()
    }

    loadMenuInfos() {
        return api.menuInfo
    }


    onMenuSelected(title: String) {
        alert(title)
    }

    pushToDetail() {
    }

    onGridSelected(index: number) {
        let discount = this.state.discounts[index]

        console.log('discount'+discount)

        if (discount.type == 1) {
            // let location = discount.url.indexOf('https')
            // let url = discount.url.slice(location)
            let url='https://g.meituan.com/av/rainbow/1202323/index.html?utm_source=dpapp'
            if(url!=null){
                this.pushToDetail.bind(this);
            }
        }
    }

    //请求打折产品
    requestDiscount() {
        fetch(api.discount)
            .then((response) => response.json())
            .then((json) => {
                console.log(JSON.stringify(json));
                this.setState({ discounts: json.data })
            })
            .catch((error) => {
                alert(error)
            })
    }

    //请求推荐列表
    requestRecommend() {
        fetch(api.recommend)
            .then((response) => response.json())
            .then((json) => {
                console.log(JSON.stringify(json));

                let dataList = json.data.map((info) => {
                    return {
                        id: info.id,
                        imageUrl: info.squareimgurl,
                        title: info.mname,
                        subtitle: `[${info.range}]${info.title}`,
                        price: info.price
                    }
                })

                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(dataList)
                })
                setTimeout(() => {
                    this.refs.listView.endRefreshing(RefreshState.NoMoreData)
                }, 500);
            })
            .catch((error) => {
                this.refs.listView.endRefreshing(RefreshState.Failure)
            })
    }

    render() {

        return (
            <View style={styles.home}>
                <ActionBar/>

                <RefreshListView
                    ref='listView'
                    dataSource={this.state.dataSource}
                    renderHeader={() => this.renderHeader()}
                    renderRow={(rowData) =>
                        <RecommendCell
                            info={rowData}
                            onPress={() => {
                                StatusBar.setBarStyle('default', false)
                            }}
                        />
                    }
                    onHeaderRefresh={() => this.requestData()}
                />
            </View>
        );
    }


    renderHeader() {
        return (
            <View style={styles.flex}>
                <BannerView style={styles.banner}/>
                <MenuView menuInfos={this.loadMenuInfos()} onMenuSelected={(index) => this.onMenuSelected(index)} />
                <SpacingView/>
                <GridView  infos={this.state.discounts} onGridSelected={(index) => this.onGridSelected(index)} />
                <SpacingView />
                <View style={styles.recommendHeader}>
                    <Heading2>猜你喜欢</Heading2>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        marginTop:20
    },
    flex: {
        flex: 1,
    },
    top: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    banner: {
        flex: 1,
        width:screen.width,
        height:160
    },
    recommendHeader: {
        flex:1,
        height: 35,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#e9e9e9',
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    card: {
        backgroundColor: "#ffffff",
        marginTop: 10,
        paddingHorizontal: 16,
        paddingVertical: 16
    },

});

