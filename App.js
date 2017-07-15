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
  ScrollView,
  AsyncStorage
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import Carousel from 'react-native-snap-carousel';
import { ImagePicker } from 'expo';
import ParallaxScrollView from 'react-native-parallax-scroll-view';


const loginBackground = require('./images/login.jpeg');
const exampleImg = require('./images/example_post.jpeg');
const chloeIcon = require('./images/chloe.png');
const eliseIcon = require('./images/elise.png');

class UploadScreen extends React.Component {
  static navigationOptions = {
    title: 'Upload',
    tabBarIcon: () => (
      <Image source={require('./assets/icons/upload.png')}
      style={NavStyle.icon}
    />
  )
}

constructor(){
  super();
  this.state = {
    image: null,
  }
}

render() {
  let { image } = this.state;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Pick an image from camera roll"
        onPress={this._pickImage}
      />
      {image &&
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    )
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
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
    <View style={BookmarkStyles.background}>
      <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
        <View>
          <View>
            <Image source={require('./images/ny.jpg')} style={BookmarkStyles.post}/>
          </View>
          <View>
            <Image source={require('./images/sf.jpg')} style={BookmarkStyles.post}/>
          </View>
          <View>
            <Image source={require('./images/chicago.jpg')} style={BookmarkStyles.post}/>
          </View>
          <View>
            <Image source={require('./images/london.jpg')} style={BookmarkStyles.post}/>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
}


const BookmarkStyles = StyleSheet.create({
  post:{
    marginTop: 0,
    marginBottom: 0,
    height: 130,
    width: '100%'
  },
  background: {
    backgroundColor: 'white',
    // flex: 1,
    // display: 'flex',
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    // justifyContent: 'flext-start'
  }
  // infoContainer: {
  //   display: 'flex',
  //   padding: 20
  // },
  // image:{
  //   height:275,
  //   width:275
  // },
  // locationName: {
  //   fontSize: 20,
  //   marginTop: 10,
  //   marginBottom: 10
  // },
  // caption: {
  //   marginTop: 10,
  //   fontSize: 12,
  //   marginBottom: 10
  // }
})

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
    <ScrollView>
      <View style={ExploreStyles.exploreContainer}>
        <View>
          <Text style={ExploreStyles.Category}>Food</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={ExploreStyles.categoryRow}>
            <Image source={require('./images/food1.jpg')} style={{width: 125, height: 125}}/>
            <Image source={require('./images/food2.jpg')} style={{width: 125, height: 125}}/>
            <Image source={require('./images/food3.jpg')} style={{width: 125, height: 125}}/>
            </View>
          </ScrollView>
        </View>
        <View>
          <Text style = {ExploreStyles.Category}>Museums</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={ExploreStyles.categoryRow}>
            <Image source={require('./images/views1.jpg')} style={{width: 125, height: 125}}/>
            <Image source={require('./images/views2.jpg')} style={{width: 125, height: 125}}/>
            <Image source={require('./images/views3.jpg')} style={{width: 125, height: 125}}/>
            </View>
          </ScrollView>
        </View>
        <View >
          <Text style = {ExploreStyles.Category}>Shopping</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={ExploreStyles.categoryRow}>
            <Image source={require('./images/shop1.jpg')} style={{width: 125, height: 125}}/>
            <Image source={require('./images/shop2.jpg')} style={{width: 125, height: 125}}/>
            <Image source={require('./images/shop3.jpg')} style={{width: 125, height: 125}}/>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
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
    <ParallaxScrollView
      parallaxHeaderHeight={100}
      fadeOutParallaxForeground={false}
      renderBackground={() => (
        <View style={userProfile.container}>
          <Image source={require('./assets/icons/parallax.jpg')}/>
        </View>
      )}>
      <Image source={require('./assets/icons/mockUser.png')} style={[userStyles.userIcon,userProfile.userIcon]}/>
      <ScrollView>
        <View>
          <View style={userProfile.UserInfoContainer}>
            <View style={userProfile.UserInfo}>
              <Text>following</Text>
              <Text>145</Text>
            </View>
            <View style={userProfile.UserInfo}>
              <Text>followers</Text>
              <Text>1542</Text>
            </View>
            <View style={userProfile.UserInfo}>
              <Text>viewed</Text>
              <Text>5.6k</Text>
            </View>
          </View>
          <View style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 0.5 ,
          }}/>
          <View style={userProfile.iconContainer}>
            <Image style={userProfile.icon} source={require('./assets/icons/grid.png')}/>
            <Image style={userProfile.icon} source={require('./assets/icons/location.png')}/>
            <Image style={userProfile.icon} source={require('./assets/icons/userTag.png')}/>
            <Image style={userProfile.icon} source={require('./assets/icons/collection.png')}/>
          </View>
        </View>
        <View style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 0.5 ,
        }}/>

      </ScrollView>
    </ParallaxScrollView>

    // <ScrollView>
    //   <View style={styles.profileContainer}>
    //     <View style={styles.userInfo}>
    //       <Text>User pic here!!</Text>
    //       <Text>Username</Text>
    //       <Text>Followers, Following, Views</Text>
    //       <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tu
    //         quidem reddes; Quantum Aristoxeni ingenium consumptum videmus in musicis?
    //         Quae est igitur causa istarum angustiarum? Hic ambiguo ludimur.
    //         Duo Reges: constructio interrete. At enim hic etiam dolore.
    //       </Text>
    //     </View>
    //     <View style={styles.buttonBar}>
    //       <Image source={require('./assets/icons/Location-Icon.png')} style={{width:30, height:30}}/>
    //       <Image source={require('./assets/icons/User-Tag-Icon.png')} style={{width:30, height:30}}/>
    //       <Image source={require('./assets/icons/Collections-Icon.png')} style={{width:30, height:30}}/>
    //     </View>
    //     <View>
    //       <View style={styles.gridRow}>
    //         <TouchableOpacity onPress={()=> this.props.navigation.navigate('PostPage')}>
    //           <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
    //         </TouchableOpacity>
    //         <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
    //       </View>
    //       <View style={styles.gridRow}>
    //         <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
    //         <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
    //       </View>
    //     </View>
    //   </View>
    // </ScrollView>
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
            <Image source={this.props.userImage} style={userStyles.userIcon}/>
            <Text style={userStyles.userName}>{this.props.username}</Text>
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
        <View style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 0.5 ,
          marginTop: 20,
          marginBottom: 10
        }}/>
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
        <Post navigation={this.props.navigation} userImage={chloeIcon} username='chloeymoon'/><Post userImage={eliseIcon} username='elisenyang'/>
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
      height: 45
    },
    showLabel: false,
  }

});


class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Register'
  };
  constructor() {
    super();
    this.state= {};
  }

  registerSubmit() {
    fetch('https://vibrant-bastille-14841.herokuapp.com/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then((response) => {
      this.props.navigation.navigate('login')
    })
    .catch((err) => {
      /* do something if there was an error with fetching */
      console.log('Error', err)
    });
  }

  render() {
    return (
      <View>
        <Text>Register</Text>
        <TextInput style={{padding: 10, height: 40}}
          placeholder="Enter your username"
          onChangeText={(text)=> this.setState({username: text})}
        />
        <TextInput style={{padding: 10, height: 40}}
          placeholder="Enter password"
          secureTextEntry={true} onChangeText={(text)=> this.setState({password: text})}
        />
        <TouchableOpacity onPress={()=> {this.registerSubmit()}}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login'
  }
  constructor(props){
    super(props)
    this.state={}
  }

  componentDidMount() {
    AsyncStorage.getItem('user')
    .then(result => {
      var parsedResult = JSON.parse(result);
      var username = parsedResult.username;
      var password = parsedResult.password;
      if (username && password) {
        this.setState({
          username: username,
          password: password
        })
        return this.press()
      }
    })
    .catch((err)=> {console.log('Error', err)})
  }

  loginClick() {
    fetch('https://vibrant-bastille-14841.herokuapp.com/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then(response => {
      this.props.navigation.navigate('tab') //REMOVE LATER
      response.json()})
      .then((responseJSON) => {
        if(responseJSON.success) {
          this.props.navigation.navigate('tab');
          AsyncStorage.setItem('user', JSON.stringify ({
            username: this.state.username,
            password: this.state.password
          }))
        } else {
          this.props.navigation.navigate('firstScreen')
        }
      })
      .catch((err) => {
        /* do something if there was an error with fetching */
        console.log('Error', err)
      });
    }

    render() {
      return (
        <View>
          <TextInput style={{padding: 10, height: 40}}
            placeholder="Username"
          />
          <TextInput style={{padding: 10, height: 40}}
            placeholder="Password"
            secureTextEntry={true}
          />

        <TouchableOpacity onPress={()=>this.loginClick()}>
          <Text
            style={{
              fontSize: 30,
            }}>LOGIN</Text>
          </TouchableOpacity>
          </View>
      )
    }
}

class FirstScreen extends React.Component {
  static navigationOptions = {
    title: 'Login'
  }
    render() {
      return (
        <View>
        <View style={loginScreen.logoContainer}>
          <Image style={loginScreen.squareLogo} source={require('./assets/icons/logo-white-square.png')}/>
          <Image style={loginScreen.logo} source={require('./assets/icons/logo-white.png')} />
        </View>


        <View style={loginScreen.quoteContainer}>
          <Text style={loginScreen.quote}>“And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is
            essential is invisible to the eye.” </Text>
            <Text style={loginScreen.speaker}>ANTOINE DE SAINT-EXUPERY</Text>
            <Text style={loginScreen.book}>The Little Prince</Text>
          </View>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('login')}>
              <Text
                style={{
                  fontSize: 30,
                  color: 'white',
                }}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('register')}>
                <Text
                  style={{
                    fontSize: 30,
                    color: 'white',
                  }}>REGISTER</Text>
                </TouchableOpacity>
            </View>
          );
        }
      }


      class SplashScreen extends React.Component {

        static navigationOptions = {
          title: 'Splash'
        }

        constructor(props){
          super(props)
          this.state={}
        }

        componentWillMount() {
          var navigator = this.props.navigation
          setTimeout(()=> {this.props.navigation.navigate('firstScreen')
        }, 2000)
      }
      render() {
        return (
          <View style={{flex:1, backgroundColor: 'red'}}></View>
        )
      }
    }

    const MyApp = StackNavigator ({
      splash: {
        screen: SplashScreen
      },
      firstScreen: {
        screen: FirstScreen
      },
      login: {
        screen: LoginScreen
      },
      register: {
        screen: RegisterScreen
      },
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
        },
        headerBackTitle: null,
        headerTintColor: 'black'
      },

    }, {initialRouteName: 'splash'})

         const loginScreen = StyleSheet.create({
              logoContainer:{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                    justifyContent: 'center'
                  },
                  squareLogo:{
                      height: 50,
                      width: 50,
                    },
                    logo:{
                        width: 250,
                        height: 50
                      },
                      quoteContainer:{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center'
                        },
                        quote:{
                            textAlign: 'center',
                            padding: 25,
                            color: 'white',
                            fontSize: 20,
                          },
                          speaker:{
                              color: 'white',
                              fontSize: 16
                            },
                            book:{
                                color: 'white',
                                fontSize: 14,
                                fontStyle: 'italic'
                           }
                          })

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
                        height: 50,
                        width: 50
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

                    const ExploreStyles = StyleSheet.create({
                      exploreContainer:{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'white'
                      },
                      Category:{
                        marginTop: 25,
                        marginBottom: 25,
                        fontSize: 15,
                        textAlign: 'center'
                      },
                      categoryRow:{
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                      }
                    })

                    const userProfile = StyleSheet.create({
                      container:{
                        display:'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      },
                      userIcon: {
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginTop: -35,
                        alignItems: 'center'
                      },
                      UserInfoContainer:{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        margin: 10
                      },
                      UserInfo:{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                      },
                      UserIcon:{
                        display:'flex'
                      },
                      iconContainer:{
                        marginTop: 10,
                        marginBottom: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around'
                      },
                      icon: {
                        width: 30,
                        height: 30 ,
                      }
                    })


                    const styles = StyleSheet.create({
                      icon: {
                        width: 30,
                        height: 30 ,
                      },
                      container: {
                        flex:1,
                        marginTop: 40,
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
