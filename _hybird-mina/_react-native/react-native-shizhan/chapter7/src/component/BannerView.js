/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow 广告视图封装
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    View
} from 'react-native';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;


var imageData = [
    'https://p0.meituan.net/mmc/22dc52dfc898200d72a7613630279950182149.gif',
    'https://p0.meituan.net/mmc/22dc52dfc898200d72a7613630279950182149.gif',
];

class BannerView extends Component {

    constructor(props) {
        super(props);
        this.state = {currentPage: 0};
    }

    renderImages() {
        let allImage = [];
        for (let i = 0; i < imageData.length; i++) {
            let item = imageData[i];
            allImage.push(
                <Image key={i} source={{uri: item}} style={styles.imageStyle}/>
            );
        }
        return allImage;
    }

    onAnimationEnd(e) {
        let offsetX = e.nativeEvent.contentOffset.x;
        let pageIndex = Math.floor(offsetX / screenWidth);
        this.setState({currentPage: pageIndex});
    }

    renderPagingIndicator() {
        let indicatorArr = [];
        let style;
        for (let i = 0; i < imageData.length; i++) {
            style = (i == this.state.currentPage) ? {color: 'orange'} : {color: 'white'};
            indicatorArr.push(
                <Text key={i} style={[{fontSize: 30}, style]}>
                    •
                </Text>
            );
        }
        return indicatorArr;
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref='scrollView'
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={(e) => {
                        this.onAnimationEnd(e)
                    }}
                    >
                    {this.renderImages()}
                </ScrollView>
                <View style={styles.pagingIndicatorStyle}>
                    {this.renderPagingIndicator()}
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ffffff'
    },
    scrollViewStyle: {
        backgroundColor: 'yellow',
    },

    imageStyle: {
        flex:1,
        width:screenWidth,
        height:160,
    },

    pagingIndicatorStyle: {
        height:25,
        width:screenWidth,
        backgroundColor:'rgba(0,0,0,0)',
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
    }

});

export default BannerView;
