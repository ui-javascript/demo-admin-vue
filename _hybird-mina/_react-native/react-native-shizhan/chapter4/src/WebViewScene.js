/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow web网页控件
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import NavBar from './web/NavBar'
import RNWebView from "./web/RNWebView";

class WebViewScene extends Component {

    state: {
        source: Object
    };

    static propTypes = {
        uri:React.PropTypes.string,
    };

    back(){
        this.props.navigator.pop()
    }

    render() {
        return (
            <View style={styles.container}>
                <NavBar
                    title="WebView实例"/>

                <RNWebView
                    source={{uri: 'https://g.meituan.com/av/rainbow/1202323/index.html?utm_source=dpapp'}}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}/>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webView: {
        flex: 1,
        backgroundColor: 'white',
    }
});

export default WebViewScene;
