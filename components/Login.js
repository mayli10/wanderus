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

class Login extends React.Component {
  render() {
    return (
      <Image source={require('../images/login.jpeg')} style={styles.container}>
      <Text>Login</Text>
      <TextInput style={{padding: 10, height: 40}}
          placeholder="Username"
        />
        <TextInput style={{padding: 10, height: 40}}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Text>Tap to Login</Text>
        </TouchableOpacity>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    width: undefined,
    height: undefined,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
