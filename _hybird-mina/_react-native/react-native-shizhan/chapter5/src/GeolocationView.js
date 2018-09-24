/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow Geolocation
 */

import React, {Component} from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class GeolocationView extends Component {

    getPosition(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position);
                console.log('initialPosition:'+initialPosition)
                this.setState({initialPosition});
                alert(initialPosition);
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        watchID = navigator.geolocation.watchPosition((position) => {
            var lastPosition = JSON.stringify(position);
            this.setState({lastPosition});
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => this.getPosition()}>
                    <Text >获取定位信息</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 200,
        alignItems: 'center',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#808080',
        height: 35,
        width: 140,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

