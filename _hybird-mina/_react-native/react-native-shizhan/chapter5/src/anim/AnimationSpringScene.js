/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Animated,
    TouchableOpacity,
    View
} from 'react-native';


export default class AnimationSpringScene extends Component {

    constructor(props) {
        super(props);
        this.springValue = new Animated.Value(0.3)
    }

    componentDidMount() {
        this.spring()
    }


    spring() {
        this.springValue.setValue(0.3)
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 1
            }
        ).start()
    }


    render() {

        return (
            <View style={styles.container}>

                <Animated.Image
                    style={{width: 227, height: 200, transform: [{scale: this.springValue}]}}
                    source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>

                <TouchableOpacity onPress={() => this.spring()} style={styles.button}>
                    <Text>启动动画</Text>
                </TouchableOpacity>
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

