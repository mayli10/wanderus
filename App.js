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

class UploadScreen extends React.Component {
  static navigationOptions = {
    title: 'Upload',
    tabBarIcon: () => (
      <Image source={require('./assets/icons/upload.png')}
      style={NavStyle.icon}
    />
  )

  };
  render() {
    return (
      <View>
      <Text>Upload</Text>
      </View>
    )
  }
}


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

//Post Screen
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
      <View style={PostScreenStyles.postContainer}>
        <View style={stdUserDisp.headerDisplay}>
          <View style={stdUserDisp.user}>
            <Image source={require('./assets/icons/mockUser.png')} style={userStyles.userIcon}/>
            <Text style={userStyles.userName}>username</Text>
          </View>
          <View style={stdUserDisp.likes}>
            <Image source={require('./assets/icons/Heart-Dark.png')} style={userStyles.likeIcon}/>
          <Text style={stdUserDisp.likesText}>145</Text>
          </View>
        </View>

        <ScrollView>
        <View>
          <Carousel ref={(carousel)=> {this._carousel = carousel}} inactiveSlideOpacity={0.2} firstItem={1} sliderWidth={325} itemWidth={275}>
              <Image source={require('./images/example_post.jpeg')} style={PostScreenStyles.image}/>
              <Image source={require('./images/example_post.jpeg')} style={PostScreenStyles.image}/>
              <Image source={require('./images/example_post.jpeg')} style={PostScreenStyles.image}/>
          </Carousel>
        </View>

        <View style={PostScreenStyles.infoContainer}>
          <Text style={PostScreenStyles.locationName}>The Coffee Shop</Text>
          <Text style={PostScreenStyles.address}>Somewhere in SF</Text>
          <Text style={PostScreenStyles.caption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tu
            quidem reddes; Quantum Aristoxeni ingenium consumptum videmus in musicis?
            Quae est igitur causa istarum angustiarum? Hic ambiguo ludimur.
            Duo Reges: constructio interrete. At enim hic etiam dolore.
          </Text>
        </View>
        </ScrollView>
      </View>
    )
  }
}

//Post
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

        <View style={stdUserDisp.headerDisplay}>
          <View style={stdUserDisp.user}>
            <Image source={require('./assets/icons/mockUser.png')} style={userStyles.userIcon}/>
            <Text style={userStyles.userName}>username</Text>
          </View>
          <View style={stdUserDisp.likes}>
            <Image source={require('./assets/icons/Heart-Dark.png')} style={userStyles.likeIcon}/>
          <Text style={stdUserDisp.likesText}>145</Text>
          </View>
        </View>

        <View style={postPreview.Imginfo}>
            <Carousel ref={(carousel)=> {this._carousel = carousel}} inactiveSlideOpacity={0.2} firstItem={1} sliderWidth={325} itemWidth={225}>
              <TouchableOpacity onPress={()=> this.clickImage()}>
                <Image source={require('./images/example_post.jpeg')} style={postPreview.image}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.clickImage()}>
                <Image source={require('./images/example_post.jpeg')} style={postPreview.image}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.clickImage()}>
                <Image source={require('./images/example_post.jpeg')} style={postPreview.image}/>
              </TouchableOpacity>
            </Carousel>
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
  Upload: {
    screen: UploadScreen
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
    alignItems:'center',
    backgroundColor: 'white'
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


const stdUserDisp = StyleSheet.create({
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
const PostScreenStyles = StyleSheet.create({
  postContainer:{
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  infoContainer: {
    display: 'flex',
    padding: 20
  },
  image:{
    height:275,
    width:275
  },
  locationName: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  caption: {
    marginTop: 10,
    fontSize: 12,
    marginBottom: 10
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
