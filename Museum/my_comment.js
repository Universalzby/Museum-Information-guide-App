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
    ImageBackground,
    ScrollView,
    TextInput
} from 'react-native';
// import RNRestart from 'react-native-restart';
import StarScore from './star.js';
import { StackNavigator } from 'react-navigation';
import Icon from './../User_/Icon_Back.js'
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texts:"dwadaw",
            names: null,
            Score0: 0,
            Score1: 0,
            Score2: 0,
            currentScore:0,
            data:{
                
            },
        };
        global.Comment = false
    }
    _getavg(v1,v2,v3){
        var num = (v1 + v2+ v3) / 3;
        return 2*num.toFixed(1);
    }
    _selectIndex0(count) {
        this.setState({
            Score0: count ,
            currentScore: this._getavg(count,this.state.Score1,this.state.Score2)
        });
    }
    _selectIndex1(count) {
        this.setState({ 
            Score1 : count ,
            currentScore: this._getavg(this.state.Score0, count, this.state.Score2)
        });
    }
    _selectIndex2(count) {
        this.setState({ 
            Score2 : count ,
            currentScore: this._getavg(this.state.Score0, this.state.Score1, count)
        });
    }
    _submit(){
        // alert("成功提交")
        this._getdata();
        global.Comment = true;
        // this.props.navigation.goBack();
        // RNRestart.Restart();
    }
    _clear(){
        alert("清空")
        this.setState({
            texts:""
        })
    }
    back= (state, goBack)=> {
        state.params.callBack("true")
        this.props.navigation.goBack();
    }
    render() {
        const { navigate, state, goback, } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
        <ScrollView>
                <View style={{backgroundColor:"white", flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 12, borderBottomWidth: 0.5, }}>
                    <View style={[styles.common, { width: ScreenWidth / 5, height: ScreenHeight / 12 }]}>
                        <TouchableOpacity
                            style={[styles.common, {}]}
                            onPress={() => this.back(state,goback)}
                        >
                            <Icon />
                        </TouchableOpacity>
                        <View style={{marginLeft:20,borderLeftWidth: 2,height:17}}>
                        </View>
                    </View>
                    <View style={[styles.common, { width: ScreenWidth * 3 / 5, height: ScreenHeight / 12 }]}>
                        <Text style={{ fontSize: 20, color: "black" }}>
                            {params.name_museum}
                        </Text>
                    </View>
                    <View style={[styles.common, { width: ScreenWidth / 5, height: ScreenHeight / 12 }]}>
                        <TouchableOpacity
                            style={[styles.common, {}]}
                            onPress={() => this._submit()}
                        >
                            <Image
                                style={styles.image}
                                source={require('./../Image/submit.png')}
                            >
                            </Image>
                        </TouchableOpacity>
                    </View>
                </View>
            <View style={[ styles.container,{backgroundColor:"white",}]}>

                <View style={[styles.common,{ height: 80 ,}]}>
                    <Text style={{ color:"#707070",fontSize: 15,}}>
                        {/* {params.username}{params.name_museum} */}
                        我的评分 {this.state.currentScore}分
                    </Text>
                </View>

                <View style={[{width:ScreenWidth,flexDirection: 'row',}]}>
                    <View style={{width:ScreenWidth/3,flexDirection: 'row-reverse',}}>
                        <Text style={{fontSize: 20,}}>
                            展览评分:
                        </Text>
                    </View>
                    <View style={{width:ScreenWidth*2/3}}>
                        <StarScore
                            selectIndex={this._selectIndex0.bind(this)}
                            value={0}
                        />
                    </View>
                </View>

                <View style={[{width:ScreenWidth,flexDirection: 'row',}]}>
                    <View style={{width:ScreenWidth/3,flexDirection: 'row-reverse',}}>
                        <Text style={{fontSize: 20,}}>
                           服务评分:
                        </Text>
                    </View>
                    <View style={{width:ScreenWidth*2/3}}>
                        <StarScore
                            selectIndex={this._selectIndex1.bind(this)}
                            value={1}
                        />
                    </View>
                </View>

                <View style={[{width:ScreenWidth,flexDirection: 'row',}]}>
                    <View style={{width:ScreenWidth/3,flexDirection: 'row-reverse',}}>
                        <Text style={{fontSize: 20,}}>
                            环境评分:
                        </Text>
                    </View>
                    <View style={{width:ScreenWidth*2/3}}>
                        <StarScore
                            selectIndex={this._selectIndex2.bind(this)}
                            value={2}
                        />
                    </View>
                </View>
                <View style={{width:ScreenWidth,backgroundColor:"black",height:0.5,marginTop: 25,}}></View>
                    {/* <Text>
                        16{this.state.texts}
                    </Text> */}
                <View style={[styles.input,{width:ScreenWidth-10,paddingLeft:10,}]}>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid='transparent' 
                        onChangeText={(text) => {
                                this.setState({
                                    texts: text
                                })
                            }}
                        placeholder=""
                        autoFocus={true}
                        multiline={true}
                        autoFocus={true}
                    />
                </View>
                <View style={{flexDirection: 'row-reverse',}}>
                    <TouchableOpacity
                        style={{ marginLeft: 5, }}
                        onPress={() =>this._clear()}
                    >
                        <Image
                            style={styles.image}
                            source={require('./../Image/rubish.png')}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                
            </View>
        </ScrollView>        
        );
    }
    componentDidMount() {
        this.setState({ names: global.username });
    }
    _getdata() {
        const { params } = this.props.navigation.state;
        let formData = new FormData();
        // alert(global.id)
        formData.append("coption", 1);
        formData.append("user_id", global.id);
        formData.append("content", this.state.texts);
        formData.append("museum_id", params.id_museum);
        formData.append("exhibition_star", this.state.Score0);
        formData.append("service_star", this.state.Score1);
        formData.append("environment_star", this.state.Score1);
        let url = "http://39.106.168.133:8080/api/commentandstar";
        fetch(url, {
            method: 'POST',
            headers: {},
            body: formData,
        }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((json) => {
                this.setState({ data: json });
                alert(json.msg);

            })
            .catch((error) => {
                console.error(error);
            });
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    common: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    input:{
        height:110,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        // alignItems:"center",
    }
});
// <View style={[styles.container, styles.common]}>
                //     <View style={[styles.header,]}>
                //         <View>
                //         <StarScore
                //             selectIndex={this._selectIndex.bind(this)}
                //         />
                //         <Text>
                //             {params.id_museum}{global.username}
                //         </Text>
                //         {/* </View> */}

                //     </View>
                // </View>
{/* <Text>
    展览评分:
                            </Text>
    <StarScore
        selectIndex={this._selectIndex0.bind(this)}
    /> */}