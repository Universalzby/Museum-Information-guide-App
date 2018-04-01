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
  ImageBackground
} from 'react-native';
import { StackNavigator } from 'react-navigation';
const {Surface, Group, Shape} = ART;
import Header from './Header';
import Person from './person';
import Icon from './Icon';
import Login from './login';
import MyComment from './comment';
import MyLike from './like';
import Regiter from './register';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
class User extends Component<Props> {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  		statement:false,
	  		name:null,
	  };
	}
	_coments(){
		if(this.state.statement == false)
			this.props.navigation.navigate('Profile');
		else
			this.props.navigation.navigate('Comment',{name:this.state.name});
	}
	_likes(){
		if(this.state.statement == false)
			this.props.navigation.navigate('Profile');
		else
			this.props.navigation.navigate('MyLike',{name:this.state.name});
	}
	_exit(){
		this.setState({statement:false})

	}
	render(){
		 const  {navigate} = this.props.navigation;
		return(
			<View style={{flexDirection:"row",}}> 
				<ImageBackground
					style={{width:ScreenWidth,height:ScreenHeight}}
              		source={require('./../Image/user.jpg')}	
				>
					<View style={{}}>


						<View style={styles.middle}>
							<View style={[styles.person_name,{justifyContent : "center",alignItems :"center",}]}>
								<Image
									style={{width:ScreenWidth/7,height:ScreenHeight/10}}
									source={require('./../Image/head.png')}
								>
								</Image>
							</View>
							<View style={{width:ScreenWidth/5}}>
							</View>
							
								{
									this.state.statement==false?
									<View style={[styles.logout,{width:ScreenWidth/2}]}>
										<TouchableOpacity 
											style={{height:50,justifyContent : "center",alignItems :"center",}}
											onPress={()=>{this.props.navigation.navigate('Profile',{callBack:(data)=>{this.setState({name:data,statement:true})}})}}
										>
											<Text style={{fontSize:20}}>
												登陆/注册
											</Text>
										</TouchableOpacity>
									</View>
									:
									<Text style={styles.text_}>
										{this.state.name}
									</Text>
								}
							
						</View>
						<View style={{height:15,backgroundColor:"#87cefa"}}>	
						</View>
						<View style={[styles.func,]}>
							<View style={{left:0}}>
								<TouchableOpacity 
									style={[styles.func,{paddingLeft:ScreenWidth/18,paddingRight:ScreenHeight/20}]}
									onPress={()=>this._coments()}
								>
									<Image
										style={{height:33,width:40}}
				                   	 	source={require('./../Image/recom.png')}
				                   	>
									</Image>

									<Text style={{fontSize:20,marginLeft:20}}>
										我的评论
									</Text>

									<View style={{width:ScreenWidth/2}}>
									</View>

									<View style={{}}>
										<Icon/>
									</View>
								</TouchableOpacity>
							</View>
							
						</View>
						<View style={{height:5,backgroundColor:"#87cefa"}}>	
						</View>
						<View style={[styles.func,]}>
							<View style={{left:0}}>
								<TouchableOpacity 
									style={[styles.func,{paddingLeft:ScreenWidth/15,paddingRight:ScreenHeight/20}]}
									onPress={()=>this._likes()}
								>
									<Image
										style={{height:40,width:38}}
				                   	 	source={require('./../Image/like.png')}
				                   	>
									</Image>

									<Text style={{fontSize:20,marginLeft:20}}>
										喜欢
									</Text>

									<View style={{width:ScreenWidth/1.7}}>
									</View>
									<View style={{}}>
										<Icon/>
									</View>
								</TouchableOpacity>
							</View>
						</View>

						<View style={{height:5,backgroundColor:"#87cefa"}}>	
						</View>

						<View style={{height:ScreenHeight/3.1,justifyContent : "center",alignItems :"center",}}>
							
						</View>
						<View style={[styles.logout,{margin:10}]}>
							<TouchableOpacity 
								style={{height:50,justifyContent : "center",alignItems :"center",}}
								onPress={()=>this._exit()}
							>
								<Text style={{fontSize:20}}>
									退出登录
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ImageBackground>
			</View>
		);
	}
}
const styles = StyleSheet.create({
  container: {
     flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title_container:{
		flex:1,
		justifyContent : "center",
		alignItems :"center",
		fontSize:20,
	},
	middle:
	{
		height:110,
		flexDirection:"row",
	alignItems :"center",

	},
   person_name:{
   	 width:80,
    height:80,
    borderWidth:2,
    borderRadius:10,
    borderColor:"silver",
    marginLeft:20,

   },
   func:{
   	height:60,
   	flexDirection:"row",
	alignItems :"center",
   },
   logout:{
   		borderWidth:2,
   		borderRadius:10,
   		overflow:"hidden",
   		backgroundColor:"pink",
   		height:50,
   },
   text_:{
    textShadowColor:'#7fff00',
    textShadowRadius:2,
    textShadowOffset:{width:2,height:2},
    fontSize :30,
  },
});
const ModalStack = StackNavigator({
 Home: {
    screen: User,
    navigationOptions: {
      	headerTitle: 
      	'我的'
    }
  },
  Profile: {
    screen: Login,
    navigationOptions: {
      	headerTitle:
      	 ''
    }
  },

  Comment: {
    screen:MyComment,
    navigationOptions: {
      	headerTitle:
      	 ''
    }
  },
  MyLike:{
  	screen:MyLike,
    navigationOptions: {
      	headerTitle:
      	 ''
    }
  },
   Reg:{
   	screen:Regiter,
   	navigationOptions: {
      	headerTitle:
      	 ''
   	}
	}
});
export default ModalStack;