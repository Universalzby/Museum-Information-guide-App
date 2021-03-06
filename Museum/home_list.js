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
import Museum_Introduction from './Museum_Introduction.js';
import Collect from './Collection.js';
import SearchBar from './SearchBar';
import News_Item from './Museum_Item.js';
import Util from './../News/Util';
import Detail from './Detail';
import User_comment from './comment.js';
import My_comment from './my_comment.js';
import New from './news.js'
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
			statement:global.statement,
		};
		
	}
	componentWillUpdate(){
		// this.state.statement = global.statement;
	}
	getData(args) {
		this.setState({
			show: false
		});
		var that = this;
		// var url ="http://139.199.102.73:8080/api/news/search/?title="+this.state.keywords 
		var url = "http://39.106.168.133:8080/api/museum/search?name="+args 
		Util.getRequest(url, function (data) {
			if (!data || data.length == 0) {
				return alert("未查询到相关信息")
			}
			//设置下载状态和下载数据源	
			var ds = new ListView.DataSource({//创建datasource对象
				rowHasChanged: (oldRow, newRow) => oldRow !== newRow
			})
			that.setState({
				show: true,
				dataSource: ds.cloneWithRows(data)
			})
			// alert(JSON.stringify(that.state.dataSource))
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
						<View style={{}}>
							<View style={[{}, { flexDirection: "row", height: ScreenHeight / 10, width: ScreenWidth, }]}>
								<View style={{ alignItems: 'center', borderWidth: 1, borderRadius: 10, } , {margin: 10,flexDirection:"row",width:ScreenWidth/1.2,}}>
									<TouchableOpacity
											onPress={()=>this.getData(this.state.keywords)}
											// onChangeText={(text) => this.setState({ keywords: text })}
										// dataDetectorTypes={dall}
									>	
										<Image
											source={require('./../Image/search.png')}
											style={{ margin: 10, }}
										/>
									</TouchableOpacity>
									<SearchBar
										
										placeholder="输入博物馆名称"
										onPress={() => this._searchPress(this.state.keywords)}
										onChangeText={(text) =>{
											this.setState({
												keywords:text
											})
										}}	
									/>
								</View>
							</View>
						
							<View style={{ backgroundColor: "silver", height: 1 }}></View>
							{
								this.state.show ?
									<ListView
										dataSource={this.state.dataSource}
										// initialListSize={5}
										contentContainerStyle={styles.contentViewStyle}
										renderRow={
											(book) => <News_Item
												book={book}
												onPress={() => {
													this.props.navigation.navigate('Profile', {
														bookID: book.id,
													}
													)
												}} />
										}
										renderSeperator={this._renderSeperator}
									/>
									
									: Util.loading
							}
						</View>
					</ImageBackground> 
				</View>
		
		);
	}
	_renderSeperator(sectionID, rowID) {
		var style = {
			height: 3,
			backgroundColor: "black"
		}
		return <View style={style} key={sectionID + rowID} ></View>
	}
	componentDidMount() {
		this.getData("馆");
	}
}
const styles = StyleSheet.create({
	base: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	contentViewStyle: {
        // 主轴方向
        flexDirection:'row',
        // 换行
        flexWrap:'wrap'
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
			header:null
		}
	},
	message:{
		screen: Museum_Introduction,
		navigationOptions: {
			headerTitle: '',
		
		}
	},
	exhibition:{
		screen: Collect,
		navigationOptions: {
			headerTitle: '',

		}
	},
	comment:{
		screen: User_comment,
		navigationOptions: {
			headerTitle: '',

		}
	},
	my_comment:{
		screen: My_comment,
		navigationOptions: {
			headerTitle: '',
			header:null
		}
	},
	news:{
		screen: New,
		navigationOptions: {
			headerTitle: '',
			header: null
		}
	}
});
export default ModalStack;