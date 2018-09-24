/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow Alpha透明度动画
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


export default class AnimationAlphaScene extends Component {

    state: {
        fadeAnim: Animated,
        currentAlpha: number,
    };

    constructor(props) {
        super(props);
        this.state = {
            currentAlpha: 1.0,
            fadeAnim: new Animated.Value(1.0)
        };
    }

    startAnimation() {
        this.state.currentAlpha = this.state.currentAlpha == 1.0 ? 0.0 : 1.0;
        Animated.timing(
            this.state.fadeAnim,
            {toValue: this.state.currentAlpha}
        ).start();
    }

    render() {
        return (
            <View style={styles.container}>

                <Animated.Text style={{
                    opacity: this.state.fadeAnim,//透明度动画
                    transform: [{
                        translateY: this.state.fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [60, 0] //线性插值，0对应60，0.6对应30，1对应0
                        }),
                    },
                        {
                            scale: this.state.fadeAnim
                        },
                    ],
                }}>
                    Welcome to React Native!
                </Animated.Text>
                <TouchableOpacity onPress={() => this.startAnimation()} style={styles.button}>
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
        backgroundColor:'#808080',
        height:35,
        width:140,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',

    },


});

