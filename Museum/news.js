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
import News_Item from '../News/Item';
import Util from '../News/Util';
import Detail from '../News/Detail';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
class Home_list extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });
        this.state = {
            show: false,
            dataSource: ds,
            keywords: "博物馆",
        };
    }
    getData(args) {
        
        this.setState({
            show: false
        });
        var that = this;
        // alert(args)
        var url = "http://39.106.168.133:8080/api/news/search?title=" + args
        // alert(url)
        Util.getRequest(url, function (data) {
            if (!data || data.length == 0) {
                return ;
            }
            //设置下载状态和下载数据源	
            var ds = new ListView.DataSource({//创建datasource对象
                rowHasChanged: (oldRow, newRow) => oldRow !== newRow
            })
            alert(data.msg)
            that.setState({
                show: true,
                dataSource: ds.cloneWithRows(data)
            })
        }, function (error) {
            alert(error);
        })
    }
    _search() {

    }
    render() {
        return (
            <View style={{ flexDirection: "row", }}>
                <ImageBackground
                    style={{ width: ScreenWidth, height: ScreenHeight }}
                    source={require('./../Image/user.jpg')}
                >
                    <View style={{ backgroundColor: "silver", height: 1 }}>
                    </View>
                    {
                        this.state.show?
                            <ListView
                                dataSource={this.state.dataSource}
                                initialListSize={20}
                                renderRow={
                                    (book) => <News_Item
                                        book={book}
                                        onPress={() => {
                                            this.props.navigation.navigate('Profile', { bookID: book.title })
                                        }
                                        } />
                                }
                                renderSeperator={this._renderSeperator}
                            />
                            : Util.loading
                    }
					
				</ImageBackground>
			</View>
		
		);
    }
    _renderSeperator(sectionID, rowID) {
        var style = {
            height: 1,
            backgroundColor: "#CCCCCC"
        }
        return <View style={style} key={sectionID + rowID}></View>
    }
    componentDidMount() {
        const { params } = this.props.navigation.state;
        // alert(JSON.stringify(params.data))
        this.getData(params.data.name);
    }
}
const styles = StyleSheet.create({
    base: {
        justifyContent: 'center',
        alignItems: 'center',
    },

});

const ModalStack = StackNavigator({
    Home: {
        screen: Home_list,
        navigationOptions: {
            headervisible: false,
            header: null
        },
        StackNavigatorConfig: {
            headerMode: 'float',
        }
    },
    Profile: {
        screen: Detail,
        navigationOptions: {
            headerTitle: '',
            // header: null
        }

    }

});
export default ModalStack;