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
export default class Comment extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
			names:null,
        
      };
    }
    
    render(){
      const {params} = this.props.navigation.state;
      return(
        <View>
            <Text>
                {global.username}
            </Text>
        </View>
      );
    }
      componentDidMount() {
        this.setState({names:global.username});
    }
}
