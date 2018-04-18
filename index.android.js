import React from 'react';
import {
    AppRegistry
} from 'react-native';
import App from './test';

class Example extends React.Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('Task', () => App);