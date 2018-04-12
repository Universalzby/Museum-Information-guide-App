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
    TextInput,
    TouchableOpacity,
    PixelRatio,
    ImageBackground,
    Picker
} from 'react-native';
// import Photo from './selectPhoto.js';
import Test from './choose.js';
import { StackNavigator } from 'react-navigation';
import Icon from './../User_/Icon.js';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
const { width, height } = Dimensions.get('window');
const sexArr = ["男", "女"];
export default class Personal_sets extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nikename:"空",
            introduce:"空",
            sex:"空",
            city:"空",
            qq:"空",
            WX:"空",
            email:"空",
        };
        this._getdata()
    }
    back(){
        this.props.navigation.goBack();
    }
    _sex(){
        alert("性别")
    }
    _city(){
        alert("城市")
    }
    render() {
        // const { params } = this.props.navigation.state; { params.name }
        const { navigate } = this.props.navigation;
        return(

            <View style={{ backgroundColor: "#fcfbe6", width: ScreenWidth, height: ScreenHeight }}>
                <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 12,borderBottomWidth:0.5, }}>
                    <View style={[styles.common, { width: ScreenWidth / 5, height: ScreenHeight / 12 }]}>
                        <TouchableOpacity
                            style={[styles.common, {}]}
                            onPress={() => this.back()}
                        >
                            <Text style={styles.Text_}>
                                取消
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.common, { width: ScreenWidth * 3 / 5, height: ScreenHeight / 12 }]}>
                        <Text style={{ fontSize: 20, color: "black" }}>
                            个人资料
                    </Text>
                    </View>
                    <View style={[styles.common, { width: ScreenWidth / 5, height: ScreenHeight / 12 }]}>
                        <TouchableOpacity
                            style={[styles.common, {}]}
                            onPress={() => this._save()}
                        >
                            <Text style={styles.Text_}>
                                保存
                    </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight/8, borderBottomWidth: 0.5, }}>
                    <TouchableOpacity
                        onPress={()=>this._getPhoto()}
                    >
                        <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 8 }}>
                            <View style={[styles.common, { width: ScreenWidth / 6, height: ScreenHeight / 8, }]}>
                                <Text style={{ fontSize: 20, color: "black" }}>
                                    头像
                                </Text>
                            </View>
                            <View style={[styles.common, { width: ScreenWidth / 6, marginLeft: ScreenWidth /2, height: ScreenHeight / 8, }]}>
                                <Image 
                                    style={{ height:ScreenHeight/10, width: ScreenWidth/7 }}
                                    source={require('./../Image/head.png')} 
                                />
                            </View>
                            <View style={[styles.common, { width: ScreenWidth / 6 }]}>
                                <Icon />
                            </View>
                        </View>

                    </TouchableOpacity>      
                </View>

                <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 12, borderBottomWidth: 0.5, }}>
                    <View style={[styles.common, {  width: ScreenWidth / 6, height: ScreenHeight / 12, }]}>
                        <Text style={{ fontSize: 20, color: "black" }}>
                            昵称
                        </Text>
                    </View>
                    <View style={styles.common}>
                        <TextInput
                            defaultValue={this.state.nikename}
                            underlineColorAndroid='transparent'
                            style={styles.input}
                            onChangeText={(text) => {
                                this.setState({
                                    nikename: text
                                })
                            }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 12, borderBottomWidth: 0.5, }}>
                    <View style={[styles.common, { width: ScreenWidth / 6, height: ScreenHeight / 12, }]}>
                        <Text style={{ fontSize: 20, color: "black" }}>
                            邮箱
                        </Text>
                    </View>
                    <View style={styles.common}>
                        <TextInput
                            defaultValue={this.state.email}
                            underlineColorAndroid='transparent'
                            style={styles.input}
                            onChangeText={(text) => {
                                this.setState({
                                    email: text
                                })
                            }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 8, borderBottomWidth: 0.5, }}>
                    <View style={[styles.common, { width: ScreenWidth / 6, height: ScreenHeight / 12, }]}>
                        <Text style={{ fontSize: 20, color: "black" }}>
                            简介
                        </Text>
                    </View>
                    <View style={styles.common}>
                        <TextInput
                            defaultValue={this.state.introduce}
                            underlineColorAndroid='transparent'
                            style={styles.input}
                            onChangeText={(text) => {
                                this.setState({
                                    introduce: text
                                })
                            }}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 12, borderBottomWidth: 0.5, }}>
                    <TouchableOpacity
                        onPress={
                            this.showAlertSelected.bind(this)
                        }
                    >
                        <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 12 }}>
                            <View style={[styles.common, {  width: ScreenWidth / 6, height: ScreenHeight / 12, }]}>
                                <Text style={{ fontSize: 20, color: "black" }}>
                                    性别
                                </Text>
                            </View>
                            
                            <View style={[styles.common, { width: ScreenWidth / 6, height: ScreenHeight / 12, }]}>
                                <Text style={{ fontSize: 20, color: "black" }}>
                                    {this.state.sex}
                                </Text>
                            </View>
                            <View style={[styles.common, { marginLeft: ScreenWidth /2, width: ScreenWidth / 6 }]}>
                                <Icon />
                            </View>
                        </View>
                       
                    </TouchableOpacity>
                        
                 </View>

                <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 12, borderBottomWidth: 0.5, }}>
                    {/* <TouchableOpacity
                        onPress={() => this._city()}
                    > */}
                        <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 12 }}>
                            <View style={[styles.common, {  width: ScreenWidth / 6, height: ScreenHeight / 12, }]}>
                                <Text style={{ fontSize: 20, color: "black" }}>
                                    城市
                                </Text>
                            </View>
                            <View style={[styles.common, { width: ScreenWidth / 6, height: ScreenHeight / 12, }]}>
                                
                                <Picker
                                    selectedValue={this.state.city}
                                    onValueChange={(place) => { this.setState({ city: place }) }}
                                    mode="dialog"
                                    style={styles.pickerstyle}
                                >
                                    <Picker.Item label="北京" value="北京" />
                                    <Picker.Item label="上海" value="上海" />
                                    <Picker.Item label="天津" value="天津" />
                                    <Picker.Item label="济南" value="济南" />
                                    <Picker.Item label="石家庄" value="石家庄" />
                                </Picker>
                            </View>
                            <View style={[styles.common, { marginLeft: ScreenWidth /2, width: ScreenWidth / 6 }]}>
                                <Icon />
                            </View>
                            
                        </View>
                    
                    {/* </TouchableOpacity> */}
                    
                </View>
                
                <Test
                    ref="alertSelected"
                />
                
            </View>
        )
    };
    callbackSelected(i) {
        // setTimeout(() => {
        //     alert("选择了" + sexArr[i]);
        // }, 500);
        this.setState({sex:sexArr[i]})
    }
    showAlertSelected() {
        this.refs.alertSelected.show("请选择性别", sexArr, this.callbackSelected.bind(this));
    }
    _getPhoto() {
        
        // let formData = new FormData();
        // let file = { 
        //     uri: "file:///storage/emulated/0/Pictures/eb645893-4c00-44a3-a9b4-a2116e955f7c.jpg", 
        //     type: 'multipart/form-data', 
        //     name: 'a.jpg' ,
        // };
        // let url = "http://39.106.168.133:8080/static/upload/avatar/" + file.nm;
        // formData.append("images", file);

        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //     },
        //     body: formData,
        // })
        //     .then((response) => response.text())
        //     .then((responseData) => {

        //         console.log('responseData', responseData);
        //     })
        //     .catch((error) => { console.error('error', error) });    


    }
    _save() {
        let formData = new FormData();
        // alert(global.id)
        formData.append("id", global.id);
        // formData.append("password", "123465");
        formData.append("sex", this.state.sex == "男" ? 1 : 2);
        formData.append("nickname", this.state.nikename);
        formData.append("intro", this.state.introduce);
        formData.append("email", this.state.email);
        let url = "http://39.106.168.133:8080/api/user/updateinfo";
        fetch(url, {
            method: 'POST',
            headers: {},
            body: formData,
        }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((json) => {
                this.setState({ data: json });
                alert(json.msg);

            })
            .catch((error) => {
                console.error(error);
            });
    }
    _getdata() {
        let formData = new FormData();
        formData.append("id", global.id);
        fetch("http://39.106.168.133:8080/api/user/getinfo", {
            method: 'POST',
            body: formData,
        }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((json) => {
                this.setState({ data: json });
                // alert(JSON.stringify(json));
                this.setState({
                    nikename: json.nickname == null ? "空" : json.nickname,
                    introduce: json.intro == null ? "空" : json.intro,
                    sex: json.sex == null ? "空" : (json.sex == 1 ? "男" : "女"),
                    email: json.email == null ? "空" : json.email,
                    city: "空",
                    qq: "空",
                    WX: "空",

                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
const styles = StyleSheet.create({
    common:{
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"row",
    },
    Text_:{
        fontSize:20,
        color:"#26c85a",
    },
    input:{
        height:ScreenHeight/15,
        fontSize: 18,
        width:ScreenWidth/1.5,
        
    },
    pickerstyle:{
        width:ScreenWidth
    }
});