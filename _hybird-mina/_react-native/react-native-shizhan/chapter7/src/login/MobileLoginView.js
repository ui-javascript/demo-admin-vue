/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow 模仿登录界面
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import TimerButton from '../component/TimerButton'
import Toast, {DURATION} from '../component/ToastUtil'

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

export default class MobileLoginView extends Component {

    requestSMSCode(shouldStart){
        Toast.show('验证码已发送')
    }

    render() {
        return (
            <View style={styles.container}>
                <Toast ref="toast"/>

                <TextInput
                    style={styles.styleUserName}
                    placeholder='请输入手机号'
                    underlineColorAndroid={'transparent'}
                    numberOfLines={1}
                    autoFocus={true}
                />
                <View style={styles.styleLine}/>

                <View style={styles.stylePassContainer}>
                <TextInput
                    style={styles.stylePassWord}
                    placeholder='请输入验证码'
                    numberOfLines={1}
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={true}/>
                    <View style={styles.styleCodeView}>
                        {/*<Text  style={styles.styleCode} onPress={()=>{*/}
                            {/*this.refs.toast.show('你点击了获取验证码!',2000);*/}
                        {/*}}>获取验证码</Text>*/}
                        <TimerButton
                                     style={{width: screenWidth*0.2,marginRight: 10}}
                                     timerCount={60}
                                     textStyle={{color: '#dc1466'}}
                                     onclick={(start)=>{

                                     }}/>
                    </View>
                </View>
                <View style={styles.styleSubmit}>
                    <Text style={styles.submit}>
                        登录
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    styleUserName: {
        backgroundColor: '#ffffff',
        marginTop: 10,
        height: 40,
        width: screenWidth,
        textAlign: 'left',
        paddingLeft: 10,
    },
    styleLine: {
        backgroundColor: '#f4f4f4',
        height: 1,
        width: screenWidth,
    },
    stylePassContainer: {
        backgroundColor: '#ffffff',
        height: 40,
        width: screenWidth,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    stylePassWord: {
        backgroundColor: '#ffffff',
        height: 40,
        width: screenWidth*0.75,
        textAlign: 'left',
        paddingLeft: 10,
    },
    styleText: {
        fontSize: 14,
        marginTop: 10,
        color: '#dc1466',
        textAlign: 'right',
    },
    styleCode: {
        fontSize: 12,
        color: '#dc1466',
        textAlign: 'center',
    },
    styleCodeView: {
        height: 28,
        width: screenWidth*0.22,
        borderColor: '#dc1466',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
     styleSubmit: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#dc1466',
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submit: {
        color: '#ffffff',
    },
});

