import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    StatusBar,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ListView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Comments from './../Comments/show_comment.js';
import Icon from './../User_/Icon_Back.js';
import Util from './../News/Util.js';
var Swiper = require('react-native-swiper');
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class collect extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });
        this.state = {
            show: false,
            dataSource: ds,
            keywords: "故宫博物院",
            Data:null,
            image: [
                'https://cdn.pixabay.com/photo/2018/02/04/21/13/monastery-3130879_960_720.jpg',
                'https://picjumbo.com/wp-content/uploads/florence-at-night_free_stock_photos_picjumbo_DSC04580-2210x1473.jpg',
                'http://img.hb.aicdn.com/8d4d80cb67c1ef15168f01b925245b04400ecdc621b0b-L5WWXL_fw658',
                'http://img.hb.aicdn.com/070119e36ac0390f2878cbc57cdb9fec508921ff1111d-WLwiqK_fw658',
                'http://img.hb.aicdn.com/6e8eba9b25f08b3bd7957ad390031357f297ffab19910-qspBG6_fw658',
                'http://img.hb.aicdn.com/b2f584032e3bc70098ab857782be2eb03f32a8609025-S8sYPX_fw658',
            ],
        };
        
    }
    renderImg() {
        var imageViews = [];
        for (var i = 0; i < this.state.image.length; i++) {
            imageViews.push(
                <Image
                    key={i}
                    style={{ flex: 1 }}
                    source={{ uri: this.state.image[i] }}
                />
            );
        }
        return imageViews;
    }
    getData() {
        // const { params } = this.props.navigation.state;
        // let url = "http://39.106.168.133:8080/api/exhibition/" + params.data.id;
        // var that = this;
        // Util.getRequest(url, function (data) {
        //     that.setState({
        //         Data: data
        //     })
        // }, function (error) {
        //     alert(error);
        // })
        // alert(JSON.stringify(this.state.Data))
    }
    render() {
        const { params } = this.props.navigation.state;
        // const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <View>
                    <Swiper height={200}
                        paginationStyle={{ bottom: 10 }}
                        autoplay={true}
                        dot={<View style={{ width: 8, height: 8, backgroundColor: 'white', borderRadius: 4, marginLeft: 3, marginRight: 3 }}></View>}
                        activeDot={<View style={{ width: 8, height: 8, backgroundColor: 'orange', borderRadius: 4, marginLeft: 3, marginRight: 3 }}></View>}
                    >
                        {this.renderImg()}
                    </Swiper>
                    <View style={styles.common}>
                        <Text style={styles.title}>{params.data.name}</Text>

                    </View>
                    {/* <View>
                        <Text style={styles.title}>教育活动</Text>
                        <Text style={styles.text}>{params.data.edu_activity == null ? "暂无" : params.data.edu_activity}</Text>
                        <Text style={styles.title}>藏品</Text>
                        <Text style={styles.text}>{params.data.collection == null ? "暂无" : params.data.collection}</Text>
                        <Text style={styles.title}>学术研究信息</Text>
                        <Text style={styles.text}>{params.data.academic == null ? "暂无" : params.data.academic}</Text>
                    </View> */}
                    <View>
                        <Text style={styles.title}>展览名称</Text>
                        <Text style={styles.text}>{params.Data.title}</Text>
                        <Text style={styles.title}>开放时间</Text>
                        <Text style={styles.text}>{params.Data.time}</Text>
                        <Text style={styles.title}>地点</Text>
                        <Text style={styles.text}>{params.Data.address}</Text>
                        <Text style={styles.title}>介绍</Text>
                        <Text style={styles.text}>{params.Data.introduce}</Text>
                    </View>
                    <View style={{ height: 55 }}>
                    </View>
                </View>
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
    common: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
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
});