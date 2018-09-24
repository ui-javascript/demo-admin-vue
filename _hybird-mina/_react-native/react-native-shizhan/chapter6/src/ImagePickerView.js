/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow react-native-image-crop-picker
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

var options = {
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    storageOptions: {
        skipBackup: true,
        path:'images'
    }
    };


export default class ImagePickerView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null
        };
    }

    openMycamera = () =>{
        ImagePicker.showImagePicker(options,(response) =>{
            if (response.didCancel) {
                alert("用户点击了取消：");
            } else if (response.error) {
                alert("ImagePicker发生错误：" + response.error);
            } else {
                // let source;
                // if (Platform.OS === 'android') {
                //     source = {uri: response.uri, isStatic: true}
                // } else {
                //     source = {uri: response.uri.replace('file://', ''), isStatic: true}
                // }

                let source = { uri: response.uri };
                this.setState({
                    avatarSource: source
                });
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity  style={styles.button} onPress={()=>this.openMycamera()} >
                    <Text >相机&相册</Text>
                </TouchableOpacity>
                <Image source={this.state.avatarSource} style={styles.imageStyle} />
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
        backgroundColor: '#808080',
        height: 35,
        width: 140,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    imageStyle:{
        height:180,
        width:250,
        marginTop:30,
        alignSelf:'center',
    },

});

