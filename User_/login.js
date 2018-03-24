import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    StatusBar,
    ART,
    TouchableOpacity,
    PixelRatio,
    ImageBackground
} from 'react-native';
import Search from './login_text';
import Register from './register.js';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class Login extends Component<Props> {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

    render(){
      return(
        <View style={{flexDirection:"row",}}>
            <ImageBackground
              style={{width:ScreenWidth,height:ScreenHeight}}
              source={require('./../Image/bgm.jpg')}
            >
              <View >
                <View style={{height:ScreenHeight/4,width:ScreenWidth,justifyContent : "center",alignItems :"center",}}>
                  <Text style={styles.text_}>
                    欢迎来到博物馆
                  </Text>
                </View>
                <Search/>
                <Search/>
                <View style={{flexDirection:"row",margin:ScreenHeight/20,justifyContent : "center",alignItems :"center",}}>
                    <TouchableOpacity 
                      style={styles.bnt} 
                     onPress={()=>this._regist()}
                    >
                        <Text style={{fontSize:20,justifyContent : "center",alignItems :"center",}}>登录</Text>
                    </TouchableOpacity>
                    <View style={{width:ScreenWidth/18}}>
                    </View>
                    <TouchableOpacity 
                      style={styles.bnt} 
                      
                       onPress={()=>{this.props.navigation.navigate('log')}}
                    >
                        <Text style={{fontSize:20,justifyContent : "center",alignItems :"center",}}>注册</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
        </View>

      );
    }

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  text_:{
    textShadowColor:'#7fff00',
    textShadowRadius:2,
    textShadowOffset:{width:2,height:2},
    fontSize :30,
  },
  bnt:{
      borderWidth:2,
      borderRadius:10,
      overflow:"hidden",
      backgroundColor:"pink",
      height:ScreenHeight/15,
      width:ScreenWidth/3,
      justifyContent : "center",
      alignItems :"center",
  },

});
