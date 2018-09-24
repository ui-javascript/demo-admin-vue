/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Text,
    View
} from 'react-native';
const {width, height} = Dimensions.get('window');

import FoodActionBar from "./pop/FoodActionBar";
import Separator from "./util/Separator";
import TopMenu from "./pop/TopMenu";


const CONFIG = [
    {
        type:'subtitle',
        selectedIndex:1,
        data:[
            {title:'全部', subtitle:'1200m'},
            {title:'自助餐', subtitle:'300m'},
            {title:'自助餐', subtitle:'200m'},
            {title:'自助餐', subtitle:'500m'},
            {title:'自助餐', subtitle:'800m'},
            {title:'自助餐', subtitle:'700m'},
            {title:'自助餐', subtitle:'900m'},
        ]
    },
    {
        type:'title',
        selectedIndex:0,
        data:[{
            title:'智能排序'
        }, {
            title:'离我最近'
        }, {
            title:'好评优先'
        }, {
            title:'人气最高'
        }]
    }
];


export default class FoodView extends Component {

    constructor(props){
        super(props);
        this.state = {
            data:{}
        };
    }

    renderContent=()=>{
        return (
            <TouchableOpacity >
                <Text style={styles.text}>index:{this.state.index} subindex:{this.state.subindex} title:{this.state.data.title}</Text>
            </TouchableOpacity>
        );
        // alert(this.state.data.title)
    };

    onSelectMenu=(index, subindex, data)=>{
        this.setState({index, subindex, data});
    };

    render() {
        return (
            <View style={styles.container}>
                <FoodActionBar/>
                <Separator/>
                <TopMenu style={styles.container} config={CONFIG} onSelectMenu={this.onSelectMenu} renderContent={this.renderContent}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:width,
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize:20,
        marginTop:100,
        justifyContent: 'center',
        alignItems: 'center',

    },

});

