import React, { Component } from 'react';
import { Text, View,TouchableOpacity} from 'react-native';
import DailyPic from '../screens/DailyPic';
import SpaceCraft from '../screens/SpaceCraft';
import StarMap from '../screens/StarMap';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "top",
                    alignItems: "center"
                }}>
                <Text>Home Screen!</Text>
                <View>
                    <TouchableOpacity
                        onPress = {this.props.navigation.navigate('DailyPic')}
                    >
                        <Text> Daily Pic </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}