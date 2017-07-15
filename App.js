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

class BookmarkScreen extends React.Component {
  render() {
    return (
      <Text>Test</Text>
    )
  }
}


class ExploreScreen extends React.Component {
  render() {
    return (
      <Text>Test</Text>
    )
  }
}


class UserProfile extends React.Component{
  static navigationOptions = {
    title: 'Profile'
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.profileContainer}>
          <View style={styles.userInfo}>
            <Text>User pic here!!</Text>
            <Text>Username</Text>
            <Text>Followers, Following, Views</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tu
              quidem reddes; Quantum Aristoxeni ingenium consumptum videmus in musicis?
              Quae est igitur causa istarum angustiarum? Hic ambiguo ludimur.
              Duo Reges: constructio interrete. At enim hic etiam dolore.
            </Text>
          </View>
          <View style={styles.buttonBar}>
            <Image source={require('./assets/icons/Location-Icon.png')} style={{width:30, height:30}}/>
            <Image source={require('./assets/icons/User-Tag-Icon.png')} style={{width:30, height:30}}/>
            <Image source={require('./assets/icons/Collections-Icon.png')} style={{width:30, height:30}}/>
          </View>
          <View>
            <View style={styles.gridRow}>
            <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
            <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
            </View>
            <View style={styles.gridRow}>
            <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
            <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
            </View>
          </View>
        </View>
      </ScrollView>
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
      <View style={styles.postContainer}>
        <View style={styles.header}>
          <Text style={{marginRight: 'auto'}}>Username</Text>
          <Image source={require('./assets/icons/Heart-Dark.png')} style={{width:20, height:20}}/>
        </View>
        <View style={styles.postImages}>
          <Image source={require('./images/example_post.jpeg')} style={{width: 200, height: 200}}/>
        </View>
        <View>
          <Text>The Coffee Shop</Text>
          <Text>Somewhere in SF</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tu
            quidem reddes; Quantum Aristoxeni ingenium consumptum videmus in musicis?
            Quae est igitur causa istarum angustiarum? Hic ambiguo ludimur.
            Duo Reges: constructio interrete. At enim hic etiam dolore.
          </Text>
        </View>
      </View>
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
  },
  Explore: {
    screen: ExploreScreen
  },
  Bookmark: {
    screen: BookmarkScreen
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
})

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  container: {
    flex:1,
    marginTop: 20,
    alignItems: 'center'
  },
  postContainer: {
    flex:1,
    margin: 20,
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
  },
  profileContainer: {
    flex:1,
    margin: 20
  },
  userInfo: {

  },
  buttonBar: {
    flexDirection: 'row',
    borderWidth: 2,
    justifyContent: 'space-around'
  },
  grid: {
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5
  }
})

export default MyApp;
