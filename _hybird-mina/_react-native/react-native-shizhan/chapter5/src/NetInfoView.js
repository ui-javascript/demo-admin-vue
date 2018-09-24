/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow NetInfo获取网络状态
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Button,
    NetInfo,
    View
} from 'react-native';


class NetInfoView extends Component {

    getNetInfo() {
        NetInfo.fetch().done((status) => {
            // console.log('Status:' + status);
            alert("网络状态："+status);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title='获取网络状态' onPress={() => {
                    this.getNetInfo();
                }}/>
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


});

export default NetInfoView;
