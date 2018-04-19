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
	ListView,
	Picker
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SearchBar from './SearchBar';
import News_Item from './Item';
import E_Item from './exhibition_Item';
import Exhibits_Item from './exhibits_Item'
import Util from './Util';
import Detail from './Detail';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
 class Home_list extends Component{
	constructor(props) {
	  super(props);
	var ds = new ListView.DataSource({
		rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
	    });
	  this.state = {
	  		show:false,
	  		dataSource:ds,
			keywords:"",
			place:"新闻",
		  	placeholder:"请输入新闻标题"
	  };
	}
	getData(args){
		// alert(this.state.place)
		this.setState({
			show:false
		});
		var that = this; 
		URL = [
			"http://39.106.168.133:8080/api/news/latest",
			"http://39.106.168.133:8080/api/news/search?title=",
			"http://39.106.168.133:8080/api/exhibition/search?name=",
			"http://39.106.168.133:8080/api/exhibits/search?name=",
			"http://39.106.168.133:8080/api/museum/search?name="
		]
		// alert(args)
		if(args == "null"||args==null)
		{
			if(this.state.place =="新闻")
				url = URL[0]
			else if(this.state.place =="展览")
				url = URL[2]
			else	
				url = URL[3]
		}
		else{
			if(this.state.place == "新闻")
				var url = URL[1] + args 
			else if (this.state.place == "展览")
				var url = URL[2] + args
			else
				var url = URL[3] +args
		}
		// var url = URL[0]
		// alert(url)
		Util.getRequest(url,function(data){
				if(!data || data.length==0)
				{
					alert("未查询到相关信息")
					return ;
				}
				//设置下载状态和下载数据源	
			var ds = new ListView.DataSource({//创建datasource对象
				rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
			})
			// alert(data.length)
			that.setState({
				show:true,
				dataSource:ds.cloneWithRows(data)
			})
		},function(error){
			alert(error);
		}) 
		 
	}
	_search(){
		
	}
	_renderbody(place){
		let Set = []
		if(place == "新闻")
			Set.push(
				<View key={"i" + 1}>
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
				</View>
			)
		else if(place == "展览")
			Set.push(
				<View key={"i" + 1}>
					<ListView
						dataSource={this.state.dataSource}
						initialListSize={20}
						renderRow={
							(book) => <E_Item
								book={book}
								onPress={() => {
									alert(JSON.stringify(book))
									// this.props.navigation.navigate('exhibition', { bookID: book })
								}
								} />
						}
						renderSeperator={this._renderSeperator}
					/>
				</View>
			)
		else	
			Set.push(
				<View key={"i" + 1}>
					<ListView
						dataSource={this.state.dataSource}
						initialListSize={20}
						renderRow={
							(book) => <Exhibits_Item
								book={book}
								onPress={() => {
									alert(JSON.stringify(book))
									// this.props.navigation.navigate('exhibition', { bookID: book })
								}
								} />
						}
						renderSeperator={this._renderSeperator}
					/>
				</View>
			)
		return Set
	}
	render(){
		
		return(
		
			<View style={{flexDirection:"row",}}>
				<ImageBackground
					style={{width:ScreenWidth,height:ScreenHeight}}
              		source={require('./../Image/user.jpg')}	
				> 	
					<View style={{}}>
						<View style={[{},{flexDirection:"row",height:ScreenHeight/10,width:ScreenWidth,}]}>
							<View style={{alignItems: 'center',borderWidth:1,borderRadius:10,},{marginTop:10,flexDirection:"row",width:ScreenWidth/1.2,}}>
								<View style={{ height: ScreenHeight/15, width: ScreenWidth/15, }}>
									<Picker
										selectedValue={this.state.search}
										onValueChange={(place) => { this.setState({ place: place,placeholder:"请输入"+place+"标题" })}}
										mode="dropdown"
										style={{justifyContent:"center"}}
									>
										<Picker.Item label="-查询-" value="" />
										<Picker.Item label="新闻" value="新闻" />
										<Picker.Item label="展览" value="展览" />
										<Picker.Item label="展品" value="展品" />
										
									</Picker>
								</View>
								<TouchableOpacity
									onPress={()=>this.getData(this.state.keywords)}
									// onChangeText={(text)=>this.setState({keywords:text})}	
									// dataDetectorTypes={dall}
								>
									<Image
										source={require('./../Image/search.png')} 
										style={{margin:10,}}
									/>
								</TouchableOpacity>
								<SearchBar
									placeholder={this.state.placeholder}//"输入新闻信息"
									// onPress={()=>this._searchPress(this.state.keywords)}	
									onChangeText={(text) =>this.setState({keywords:text})}	
								/>
							</View>
						</View>
						<View style={{backgroundColor:"silver",height:1}}>
						</View>
						{
							this.state.show?
							<View>
								{this._renderbody(this.state.place)}
							</View>
							:Util.loading
						}
					</View>
				</ImageBackground>
			</View>
		
		);
	}
	_renderSeperator(sectionID,rowID){
		var style={
			height:1,
			backgroundColor:"#CCCCCC"
		}
		return <View style={style} key={sectionID+rowID}></View>
	}
	componentDidMount(){
		this.getData("null");
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
      	headervisible:false,
      	header:null
    },
    StackNavigatorConfig:{
    	headerMode:'float',
    }
  },
  Profile: {
    screen: Detail,
    navigationOptions: {
      	headerTitle: ''
    }
  },
	exhibition:{
		screen: E_Item,
		navigationOptions: {
			headerTitle: ''
		}
	},
	exhibits:{
		screen: Exhibits_Item,
		navigationOptions: {
			headerTitle: ''
		}
		
	}
   
});
export default ModalStack;