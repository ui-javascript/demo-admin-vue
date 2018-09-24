/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow Frame帧动画
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Animated,
    View
} from 'react-native';


const arr = []
for (var i = 0; i < 500; i++) {
    arr.push(i)
}

export default class AnimationFrameScene extends Component {

    constructor () {
        super()
        this.animatedValue = []
        arr.forEach((value) => {
            this.animatedValue[value] = new Animated.Value(0)
        })
    }

    componentDidMount () {
        this.animate()
    }

    animate () {
        const animations = arr.map((item) => {
            return Animated.timing(
                this.animatedValue[item],
                {
                    toValue: 1,
                    duration: 50
                }
            )
        })
        Animated.sequence(animations).start()
    }

    render() {
        const animations = arr.map((a, i) => {
            return <Animated.View key={i} style={{opacity: this.animatedValue[a], height: 20, width: 20, backgroundColor: 'red', marginLeft: 3, marginTop: 3}} />
        })

        return (
            <View style={styles.container}>
                {animations}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },


});

