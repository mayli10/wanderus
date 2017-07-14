import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class Homepage extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => {
      <Image source={require('../assets/icons/home_360.png')}
      style={[styles.icon, {tintColor: tintColor}]}
    }
  }

  render() {
    return (
      <View><Text>TESTING</Text></View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  }
})


const MyApp = TabNavigator({
  Home: {
    screen: Homepage,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});



export default MyApp;
