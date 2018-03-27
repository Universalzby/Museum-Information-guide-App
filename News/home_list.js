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
} from 'react-native';
import SearchBar from './SearchBar';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class Home_list extends Component<Props> {
	constructor(props) {
	  super(props);
	
	  this.state = {};
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
							<View style={{alignItems: 'center',borderWidth:1,borderRadius:10,},{margin:10,flexDirection:"row",width:ScreenWidth/1.2,}}>
								<TouchableOpacity
										
								>
									<Image
										source={require('./../Image/search.png')} 
										style={{margin:10,}}
									/>
								</TouchableOpacity>
								<SearchBar
									placeholder="输入新闻信息"
									onPress={()=>this._searchPress(this.state.keywords)}	
									// onChangeText={(text) => this._changeText(text)}	
								/>
							</View>
						</View>
						<View style={{backgroundColor:"silver",height:1}}>
						</View>
						
					</View>
				</ImageBackground>
			</View>

		);
	}
}
const styles = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
