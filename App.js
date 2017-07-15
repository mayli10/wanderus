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
  Button,
  ScrollView
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';


class UserProfile extends React.Component{
  static navigationOptions = {
    title: 'Profile'
  };
  render() {
    return (
      <Text>HI</Text>
    )
  }
}


class PostScreen extends React.Component {
  static navigationOptions = {
    title: 'PostScreen'
  };

  constructor(props) {
    super(props);
    this.state= {};
  }

  render() {
    return (
      <View><Text>YO</Text></View>
    )
  }
}


class Post extends React.Component {
  static navigationOptions = {
    title: 'Post'
  }

  clickImage() {
    this.props.navigation.navigate('PostPage')
  }
  render () {
    return (
      <View style={styles.post}>
        <View style={styles.header}><Text style={{marginRight: 'auto'}}>Username</Text><Image source={require('./assets/icons/Heart-Dark.png')} style={{width:20, height:20}}/></View>
        <View style={styles.postImages}><TouchableOpacity onPress={()=> this.clickImage()}><Image source={require('./images/example_post.jpeg')}
        style={{width: 200, height: 200}}/></TouchableOpacity></View>
      </View>
    )
  }
}





class Homepage extends React.Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: () => (
      <Image source={require('./assets/icons/home.png')}
      style={styles.icon}
    />
  )
}
constructor(props) {
  super(props)
}
render() {
  return (
    <ScrollView><View style={styles.container}><Post navigation={this.props.navigation}/><Post/></View></ScrollView>
  )
}
}



const Tab = TabNavigator({
  Home: {
    screen: Homepage,
  },
  User: {
    screen: UserProfile
  }
},{
  tabBarOptions: {
    style: {
      backgroundColor: '#BDC3C7',
      height: 40
    },
    showLabel: false,
  }

});


const MyApp = StackNavigator ({
  tab: {
    screen: Tab
  },
  Home: {
    screen: Homepage,
  },
  PostPage: {
    screen: PostScreen
  }
},
{
  navigationOptions: {
    headerTitle: <Image source={require('./assets/icons/logo.png')} style={{width: 150, height:30}}/>,
    style: {
      height: 25,
    }
  },

},)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30 ,
  },
  container: {
    flex:1,
    marginTop: 20,
    alignItems: 'center'
  },
  post: {
    flex: 1,
    margin: 5,
    width: 300,
    borderWidth: 2,
    padding: 3
  },
  header: {
    flexDirection: 'row',
    padding: 4,
    justifyContent: 'flex-end'
  },
  postImages: {
    alignItems: 'center'
  }
})

export default MyApp;
