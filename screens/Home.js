import React, { Component } from 'react';
import { Text, View,TouchableOpacity} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "top",
                    alignItems: "center"
                }}>
                <Text>Home Screen !</Text>
                <View>
                    <TouchableOpacity 
                     onPress = {this.props.navigation.navigate('DailyPic')}
                     style={{
                        marginLeft : 100, 
                        alignItems : 'center', 
                        borderRadius : 10
                        }}>
                        <Text 
                        style={{
                            fontFamily : 'Apple Chancery', 
                            fontSize : 14
                            }}> Daily Pic </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity 
                     onPress={this.props.navigation.navigate('SpaceCraft')}
                     style={{
                        marginLeft : 100, 
                        alignItems : 'center', 
                        borderRadius : 10
                        }}>
                        <Text 
                        style={{
                            fontFamily : 'Apple Chancery', 
                            fontSize : 14
                            }}> Space Craft </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity 
                      onPress={this.props.navigation.navigate('StartMap')}
                      style={{
                        marginLeft : 100, 
                        alignItems : 'center', 
                        borderRadius : 10
                        }}>
                        <Text 
                        style={{
                            fontFamily : 'Apple Chancery', 
                            fontSize : 14
                            }}> Star Map </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}