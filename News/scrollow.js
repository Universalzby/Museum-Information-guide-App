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
import News_Item from './Item';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: null,
            id: props.id,
            data: {

            },
        };
    }
    //     <Text>
    //          {this.state.data[i].loginname}{this.state.data[i].time}{this.state.data[i].content}
    //     </Text>
    _renderBody() {
        let len = this.state.data.length;
        let News_All = [];
        for (var i = 0; i < len; i++) {
            News_All.push(
                <>
            );
        }
        return Comments;
    }
    render() {
        return (
            <ScrollView>
                {this._renderBody()}
            </ScrollView>
        );
    }
    _getdata() {
        let s = this.state.id;
        let formData = new FormData();
        // formData.append("user_id", 7);
        let url = "http://39.106.168.133:8080/api/news/latest";
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
        height: 150,
    },
    common: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
});