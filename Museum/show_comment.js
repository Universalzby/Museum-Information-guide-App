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
        };
    }
    _renderBody(){
        let len = this.state.data.length;
        let Comments = [];
        for(var i = 0;i<len;i++){
            Comments.push(
                <View style={styles.container} key={"i" + i}>
                    <View style={{}}>
                        <Text>
                            {this.state.data[i].loginname}{this.state.data[i].time}{this.state.data[i].content}
                        </Text>
                    </View>
                </View>
            );
        }
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
        height:150,
    },
    common: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
});