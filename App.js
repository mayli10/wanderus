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
import Carousel from 'react-native-snap-carousel';

class BookmarkScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore',
    tabBarIcon: () => (
      <Image source={require('./assets/icons/bookmark.png')}
      style={NavStyle.icon}
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
      style={NavStyle.icon}
    />
  )

  };

  render() {
    return (
      <View>
        <View style={styles.category}>
          <Text>good eats</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.categoryRow}>
              <Image source={require('./images/food1.jpeg')} style={{width: 125, height: 125}}/>
              <Image source={require('./images/food2.jpeg')} style={{width: 125, height: 125}}/>
              <Image source={require('./images/food3.jpeg')} style={{width: 125, height: 125}}/>
            </View>
          </ScrollView>
        </View>
        <View style={styles.category}>
          <Text>explore views</Text>
          <View style={styles.categoryRow}>
          <Image source={require('./images/views1.jpeg')} style={{width: 125, height: 125}}/>
          <Image source={require('./images/views2.jpeg')} style={{width: 125, height: 125}}/>
          <Image source={require('./images/views3.jpeg')} style={{width: 125, height: 125}}/>
          </View>
        </View>
        <View style={styles.category}>
          <Text>shop style</Text>
          <View style={styles.categoryRow}>
          <Image source={require('./images/shop1.jpeg')} style={{width: 125, height: 125}}/>
          <Image source={require('./images/shop2.jpeg')} style={{width: 125, height: 125}}/>
          <Image source={require('./images/shop3.jpeg')} style={{width: 125, height: 125}}/>
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
      style={NavStyle.icon}
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
        <Carousel ref={(carousel)=> {this._carousel = carousel}} sliderWidth={20} itemWidth={200}>
          <Image source={require('./images/example_post.jpeg')} style={{width: 200, height: 200}}/>
          <Image source={require('./images/example_post.jpeg')} style={{width: 200, height: 200}}/>
          <Image source={require('./images/example_post.jpeg')} style={{width: 200, height: 200}}/>
        </Carousel>
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
      <View style={postPreview.mainContainer}>

        <View style={homeHead.headerDisplay}>
          <View style={homeHead.user}>
            <Image source={require('./assets/icons/mockUser.png')} style={userStyles.userIcon}/>
            <Text style={userStyles.userName}>username</Text>
          </View>
          <View style={homeHead.likes}>
            <Image source={require('./assets/icons/Heart-Dark.png')} style={userStyles.likeIcon}/>
          <Text style={homeHead.likesText}>145</Text>
          </View>
        </View>

        <View style={postPreview.Imginfo}>
          <TouchableOpacity onPress={()=> this.clickImage()}>
            <Animatable.Image animation="fadeInUp" source={require('./images/example_post.jpeg')} style={postPreview.image}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

//Homepage
class Homepage extends React.Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: () => (
      <Image source={require('./assets/icons/home.png')}
      style={NavStyle.icon}
    />
  )
}
constructor(props) {
  super(props)
}
render() {
  return (
    <ScrollView>
      <Animatable.View animation="fadeInRight" style={Home.container}>
        <Post navigation={this.props.navigation}/><Post/>
      </Animatable.View>
    </ScrollView>
  )
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
  tab: {
    screen: Tab
  },
  Home: {
    screen: Homepage
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

const NavStyle = StyleSheet.create({
  icon: {
    width: 30,
    height: 30 ,
  }
})

const Home = StyleSheet.create({
  container:{
    display: 'flex',
    alignItems:'center'
  }
})

const userStyles = StyleSheet.create({
  userIcon:{
    height: 60,
    width: 60
  },
  userName:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeIcon:{
    height: 30,
    width: 30
  }
})

const homeHead = StyleSheet.create({
  headerDisplay:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  user:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  likes:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
  },
  likesText:{
    fontSize: 10,
    color: '#6C6C6C'
  }
})

const postPreview = StyleSheet.create({
  mainContainer:{
    flex: 1,
    width: '95%',
    marginBottom: 20,
  },
  Imginfo:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image:{
    height:225,
    width:225
  }
})



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
    flexDirection: 'row',
    justifyContent: 'center'
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
