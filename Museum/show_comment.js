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
    ScrollView
} from 'react-native';
import Star from './liitle_star.js';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class Show extends Component {
    constructor(props){
        super(props);
        this.state={
            time:null,
            id : props.id,
            data:{
                
            },
            image: [
                'http://iconfont.alicdn.com/t/1494395652678.png@32h_32w.jpg',
                'http://iconfont.alicdn.com/t/1522115226069.jpg@32h_32w.jpg',
                'http://iconfont.alicdn.com/t/1521166907866.png@32h_32w.jpg',
                'http://iconfont.alicdn.com/t/1522311877342.jpg@32h_32w.jpg',
                'http://iconfont.alicdn.com/t/1519886508485.jpg@32h_32w.jpg',
                'http://iconfont.alicdn.com/t/1516429577407.png@32h_32w.jpg',
            ],
            // avg_allscore:0,
            // sum_people:0,
            // avg_score0:0,
            // avg_score1: 0,
            // avg_score2: 0,
        };
    }
//     <Text>
//          {this.state.data[i].loginname}{this.state.data[i].time}{this.state.data[i].content}
//     </Text>  
    _getScore(x){
        return (x.exhibition_star + x.service_star + x.environment_star) / 3
    }
    _renderBody(){
        let len = this.state.data.length;
        let all_img = this.state.image.length;
        // let score0 = 0,score1 = 0,score2 = 0,sum = 0;
        let Comments = [];
        for(var i = 0;i<len;i++){
            Comments.push(
                <View style={[styles.container,{paddingLeft :15,paddingRight:15 ,}]} key={"i" + i}>
                    <View style={{flexDirection: 'row',}}>
                        <Image
                            // source={require('./../Image/head.png')}
                            style={{height:32,width:32}}
                            source={{ uri: this.state.image[i % all_img]}}
                        />
                        <View style={{width:20}}></View>
                        <Text 
                            style={{ fontSize: 20, fontStyle: "italic",color:"red"}}
                        >
                            {this.state.data[i].loginname}
                        </Text>
                        <View style={{ height:32,justifyContent: 'center',marginLeft: 20, }}>
                            <Star value={this._getScore(this.state.data[i])} />
                        </View>
                    </View>
                    <View style={{marginTop: 10,paddingLeft: 5,}}>
                        <Text style={{ fontWeight:"bold",color:"black"}}>
                            {this.state.data[i].content}
                        </Text>
                    </View>
                    <View style={{ height: 50,flexDirection: 'row', width:ScreenWidth,marginTop: 15,}}>
                        <View style={{ width: ScreenWidth/2}}>
                            <Text>
                                {this.state.data[i].time}
                            </Text>
                        </View>
                        <View style={{ width: ScreenWidth / 2 ,flexDirection: 'row',}}>
                            <TouchableOpacity
                                // onPress={() => this._introduction()}
                            >
                                <ImageBackground
                                    style={[styles.common, {width:20,height:20}]}
                                    source={require('./../Image/agree.png')}
                                >
                                </ImageBackground>
                            </TouchableOpacity>
                            <Text>
                                178
                            </Text>
                            <TouchableOpacity
                                style={{marginLeft: 15,}}
                                // onPress={() => this._introduction()}
                            >
                                <ImageBackground
                                    style={[styles.common, { width: 20, height: 20 }]}
                                    source={require('./../Image/other_com.png')}
                                >
                                </ImageBackground>
                            </TouchableOpacity>
                            <Text>
                                8
                            </Text>
                        </View>
                    </View>
                </View>
            );
        }
        // this.setState({
        //     avg_allscore: 0,
        //     sum_people: len,
        //     avg_score0: 0,
        //     avg_score1: 0,
        //     avg_score2: 0,
        // });
        return Comments;
    }
    render(){
        return(
        <ScrollView>    
            {this._renderBody()}    
        </ScrollView>
        );
    }
    _getdata() {
        let s = this.state.id;
        let formData = new FormData();
        // alert(s)
        // formData.append("user_id", 7);
        let url = "http://39.106.168.133:8080/api/comments/museum/" +s; 
        fetch(url, {
            method: 'GET',
        }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((json) => {
                this.setState({ data: json });
                // alert(json[0].loginname)
            })
            .catch((error) => {
                console.error(error);
            });
    }
    componentDidMount() {
        this._getdata();
    }
   
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        // height:150,
    },
    common: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
});