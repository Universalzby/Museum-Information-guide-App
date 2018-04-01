import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import TabNavigator from 'react-native-tab-navigator';
import User from './User_/User';
import Museum_Home_list from './Museum/home_list';
import News_Home_list from './News/home_list';
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  
    this.state = {
        tab:"用户",
        value:"old"
    };
  }
  render() {
    return (
      <TabNavigator  
          tabBarStyle={{height:60}}  
          style={{flex:1}}>  
          <TabNavigator.Item  
              title="博物馆"  
              selected={this.state.tab==='博物馆'}  
              onPress={()=>this.setState({tab:'博物馆'})}
              renderIcon={()=><Image  
                    style={{width:60,height:40}}  
                    source={require('./Image/hourse.png')}></Image>}  
          >      
          <Museum_Home_list 
              
          />
          </TabNavigator.Item>  

          <TabNavigator.Item  
              title="新闻消息"  
              selected={this.state.tab==='新闻消息'}  
              onPress={()=>{
              this.setState({tab:'新闻消息'});
              }}  
              renderIcon={()=><Image  
                    style={{width:35,height:27}}  
                    source={require('./Image/book.png')}></Image>}
          >  
          <News_Home_list
            

          />
          </TabNavigator.Item>


        <TabNavigator.Item  
              title="用户"  
              selected={this.state.tab==='用户'}  
              onPress={()=>{
              this.setState({tab:'用户'});
              }} 
              renderIcon={()=><Image  
                    style={{width:35,height:27}}  
                    source={require('./Image/my.png')}></Image>}  
          >  
          <User
              
          />
          
        </TabNavigator.Item>  
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container_user: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
   user_:{
    fontSize: 20,
    marginTop:20,
    textAlign:'center',
    color:'blue',
    fontStyle:'italic',
    textDecorationLine:'underline'
  }
});
