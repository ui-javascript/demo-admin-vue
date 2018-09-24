/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow 组动画
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Animated,
    Image,
    Easing,
    View
} from 'react-native';


export default class LoadingScene extends Component {


    render() {

        return (
            <View style={styles.container}>

                    <Image style={styles.loading} source={require('./image/loading.gif')}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

