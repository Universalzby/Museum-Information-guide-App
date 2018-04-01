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
import  Util from'./Util';
import Item from './Item';

 class Detail extends Component{
	constructor (){
		super();
	var ds = new ListView.DataSource({
		rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
	});
		this.state = {
			bookData:null,
		};
	}
	getData(){
		var that = this; 
		const {params} = this.props.navigation.state;
		var url = "http://139.199.102.73:8080/api/news/" + params.bookID;
		Util.getRequest(url,function(data){
			that.setState({
				bookData:data
			})
		},function(error){
			alert(error);
		}) 
	}
	render(){
		return (
			<ScrollView style={styles.container}>
				{
					this.state.bookData?
						<View>
							
							<Item book = {this.state.bookData}/>
							<View>
								<Text style={styles.title}>正文</Text>
								<Text style={styles.text}>{this.state.bookData.content}</Text>
							</View>
							<View style={{marginTop:10}}>
								<Text style={styles.title}>评论</Text>
								<Text style={styles.text}>{this.state.bookData.author_intro}</Text>
							</View>
							<View style={{height:55}}>
							</View>
						</View>
					:Util.loading
				}
			</ScrollView>
		);
	}
	componentDidMount(){
		this.getData();
	}
}

var styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:"white"
	},
	title:{
		fontSize:16,
		marginTop:10,
		marginLeft:10,
		marginBottom:10,
		fontWeight:"bold"
	},
	text:{
		marginLeft :10,
		marginRight:10,
		color:"#000D22"
	}
});

export default Detail;