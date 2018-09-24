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

import ImagePicker from 'react-native-image-crop-picker';


export default class ImageCropPickerView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null
        };
    }

    openMycamera = () =>{
        ImagePicker.openPicker({ multiple: false})
            .then(images => { console.log(images);});
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

