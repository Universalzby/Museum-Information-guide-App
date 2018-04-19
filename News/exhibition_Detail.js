import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ListView,
    ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Util from './Util';
import Item from './Item';
import Comments from './../Comments/show_comment'
class Detail extends Component {
    constructor() {
        super();
        var ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });
        this.state = {
            bookData: null,
        };
    }
    getData() {
        that.setState({
                bookData: params.bookID
            })
        // var that = this;
        // const { params } = this.props.navigation.state;
        // // alert(params.bookID)
        // var url = "http://39.106.168.133:8080/api/news/search?title=" + params.bookID;
        // Util.getRequest(url, function (data) {
        //     that.setState({
        //         bookData: data
        //     })
        //     // alert(JSON.stringify(that.state.bookData))
        // }, function (error) {
        //     alert(error);
        // })
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                {
                    this.state.bookData ?
                        <View>
                            <Item book={this.state.bookData[0]} />
                            <View style={styles.textContainer}>
                                <Text numberOfLine={1}>{this.state.bookData[0].title}</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.publisher_author}>{this.state.bookData[0].museum}</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text tyle={styles.publisher_author}>{this.state.bookData[0].time}</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text tyle={styles.publisher_author}>{this.state.bookData[0].introduce}</Text>
                            </View>
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
    title: {
        fontSize: 16,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: "bold"
    },
    text: {
        marginLeft: 10,
        marginRight: 10,
        color: "#000D22"
    },
    common: {
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Detail;