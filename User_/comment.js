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
export default class Comment extends Component<Props> {
    constructor(props) {
      super(props);
    
      this.state = {};
    }
    render(){
      const {params} = this.props.navigation.state;
      return(
        <Text>
            我的评论区；欢迎你{params.name}
        </Text>
      );
    }
}