import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ListView,
    ScrollView,
    ImageBackground
} from 'react-native';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
import { StackNavigator } from 'react-navigation';
import Util from './../News/Util.js';
import Item from './Museum_Item.js';
import Icon from './../User_/Icon_Back.js'

class Detail extends Component {
    constructor() {
        super();
        var ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });
        this.state = {
            bookData: null,
			name:global.username,
            
        };
    }
    getData() {
        var that = this;
        const { params } = this.props.navigation.state;
        // alert(params.bookID)
        var url = "http://39.106.168.133:8080/api/museum/" + params.bookID;
        Util.getRequest(url, function (data) {
            that.setState({
                bookData: data
            })
        }, function (error) {
            alert(error);
        })
    }
    _back() {
        this.props.navigation.goBack();
    }
    _introduction(){
        // alert("相关信息");
        this.props.navigation.navigate('message', {
            data: this.state.bookData,
        });
    }
    _gets(){
        alert("展览");
        this.props.navigation.navigate('exhibition', {
            data: this.state.bookData,
        });
    }
    _news(){
        alert("新闻");
    }
    _user(){
        if(global.statement == false)
            alert("请登录!")
        else{
            this.props.navigation.navigate('comment', {
                data: this.state.bookData,
            });
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                {
                    this.state.bookData ?
                        <View >
                            <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 12, borderBottomWidth: 0.5, }}>
                                <View style={[styles.common, { width: ScreenWidth / 5, height: ScreenHeight / 12 }]}>
                                    <TouchableOpacity
                                        style={[styles.common, {}]}
                                        onPress={() => this._back()}
                                    >
                                        <Icon/>
                                    </TouchableOpacity>
                                    <Text>
                                        {}
                                    </Text>
                                </View>
                                <View style={[styles.common, { width: ScreenWidth * 3 / 5, height: ScreenHeight / 12 }]}>
                                    <Text style={{ fontSize: 20, color: "black" }}>
                                        {this.state.bookData.name}
                                    </Text>
                                </View>
                            </View>
                            <ScrollView>
                                <View style={[styles.block, {  }]}>
                                    <TouchableOpacity
                                        onPress={() => this._introduction()}
                                    >
                                        <ImageBackground
                                            style={[styles.common, styles.block]}
                                            source={require('./../Image/bgm_museum.jpg')}
                                        >
                                            <View style={[styles.common, styles.block, { backgroundColor: "black", opacity: 0.5 }]}>
                                                <Text style={styles.text}>
                                                    博物馆详细介绍
                                                </Text>
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.block, { }]}>
                                    <TouchableOpacity
                                        onPress={()=>this._gets()}
                                    >
                                        <ImageBackground
                                            style={[styles.common, styles.block]}
                                            source={require('./../Image/bgm_exhibit.jpg')}
                                        >
                                            <View style={[styles.common, styles.block, { backgroundColor: "black", opacity: 0.5 }]}>
                                                <Text style={styles.text}>
                                                    展览
                                                </Text>
                                            </View>
                                        </ImageBackground>  
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.block, {  }]}>
                                    <TouchableOpacity
                                        onPress={() => this._news()}
                                    >
                                        <ImageBackground
                                            style={[styles.common, styles.block]}
                                            source={require('./../Image/bgm.jpg')}
                                        >
                                            <View style={[styles.common, styles.block, { backgroundColor: "black", opacity: 0.5 }]}>
                                                <Text style={styles.text}>
                                                    新闻
                                                </Text>
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.block,{  }]}>
                                    <TouchableOpacity
                                        onPress={() => this._user()}
                                    >
                                        <ImageBackground
                                            style={[styles.common, styles.block]}
                                            source={require('./../Image/user.jpg')}
                                        >
                                            <View style={[styles.common, styles.block, { backgroundColor: "black", opacity: 0.5 }]}>
                                                <Text style={styles.text}>  
                                                    用户区
                                                </Text>
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                        : Util.loading
                }
            </ScrollView>
        );
    }
    componentDidMount() {
        this.getData();
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    block:{
        width: ScreenWidth, 
        height: ScreenHeight*5/24,
    },
    common: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    text:{
        fontSize:20,
        color:"white",
    }
});

export default Detail;