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
    TouchableOpacity,
    View
} from 'react-native';


class AnimationIndex extends Component {

    static navigationOptions = {
        title: '动画',
    };

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={() => navigate('AnimationAlphaScene')} style={styles.button}>
                    <Text>Alpha动画</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('AnimationSpringScene')} style={styles.button}>
                    <Text>缩放动画</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('AnimationRotateScene')} style={styles.button}>
                    <Text>旋转动画</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('AnimationGroupScene')} style={styles.button}>
                    <Text>组动画</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('AnimationFrameScene')} style={styles.button}>
                    <Text>帧动画</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('LoadingScene')} style={styles.button}>
                    <Text>加载动画</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
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

export default AnimationIndex;
