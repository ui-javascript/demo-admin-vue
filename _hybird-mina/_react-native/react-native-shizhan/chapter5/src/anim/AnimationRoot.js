/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';


import AnimationIndex from './AnimationIndex';
import AnimationSpringScene from './AnimationSpringScene';//缩放动画
import AnimationRotateScene from './AnimationRotateScene';//旋转动画
import AnimationAlphaScene from './AnimationAlphaScene';//Alpha动画
import AnimationGroupScene from './AnimationGroupScene';//组动画
import AnimationFrameScene from './AnimationFrameScene';//帧动画
import LoadingScene from './LoadingScene';//加载动画

const anim = StackNavigator({
    AnimationIndex: { screen: AnimationIndex },
    AnimationSpringScene: { screen: AnimationSpringScene },
    AnimationRotateScene: { screen: AnimationRotateScene },
    AnimationAlphaScene: { screen: AnimationAlphaScene },
    AnimationGroupScene: { screen: AnimationGroupScene },
    AnimationFrameScene: { screen: AnimationFrameScene },
    LoadingScene: { screen: LoadingScene },
});


export default anim;
