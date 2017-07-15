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
import * as Animatable from 'react-native-animatable';

class BookmarkScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore',
    tabBarIcon: () => (
      <Image source={require('./assets/icons/bookmark.png')}
      style={styles.icon}
    />
  )

  };
  render() {
    return (
      <View>
      <Image source={require('./images/DG2015-san-francisco.png')} style={{}}/>
      </View>
    )
  }
}


class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore',
    tabBarIcon: () => (
      <Image source={require('./assets/icons/explore.png')}
      style={styles.icon}
    />
  )

  };

  render() {
    return (
      <View>
        <View style={styles.category}>
          <Text>Food</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.categoryRow}>
              <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
              <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
              <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
            </View>
          </ScrollView>
        </View>
        <View style={styles.category}>
          <Text>Museums</Text>
          <View style={styles.categoryRow}>
          <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
          <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
          <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
          </View>
        </View>
        <View style={styles.category}>
          <Text>Shopping</Text>
          <View style={styles.categoryRow}>
          <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
          <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
          <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
          </View>
        </View>
      </View>
    )
  }
}


class UserProfile extends React.Component{
  static navigationOptions = {
    title: 'Profile',
    tabBarIcon: () => (
      <Image source={require('./assets/icons/user.png')}
      style={styles.icon}
    />
  )

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
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('PostPage')}>
              <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
            </TouchableOpacity>
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

class Login extends React.Component {
  static navigationOptions = {
    title: 'Login'
  }
  render() {
    return (
      <Image source={require('./images/login.jpeg')}
        style={{flex: 1,
        backgroundColor: 'transparent',
        width: undefined,
        height: undefined,
        alignItems: 'center',
        justifyContent: 'center'}}>
      <Text>Login</Text>
      <TextInput style={{padding: 10, height: 40}}
          placeholder="Username"
        />
        <TextInput style={{padding: 10, height: 40}}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')}>
          <Text>Tap to Login</Text>
        </TouchableOpacity>
      </Image>
    );
  }
}

const Tab = TabNavigator({
  Home: {
    screen: Homepage,
  },
  Explore: {
    screen: ExploreScreen
  },
  Bookmark: {
    screen: BookmarkScreen
  },
  User: {
    screen: UserProfile
  }
},{
  tabBarOptions: {
    style: {
      backgroundColor: '#BDC3C7',
      height: 35
    },
    showLabel: false,
  }

});


const MyApp = StackNavigator ({
  Login: {
    screen: Login
  },
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
    headerStyle: {
      height: 60,
      backgroundColor: 'white'
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
  },
  category: {

  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

export default MyApp;
