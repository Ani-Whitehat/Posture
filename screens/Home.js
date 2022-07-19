import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';

const image = { uri: 'https://wallpaperaccess.com/full/2089151.jpg' };

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Header
            backgroundColor={'red'}
            centerComponent={{
              text: 'Posture Corrector',
              style: { color: '#fff', fontSize: 20 },
            }}
          />
          <Text style={styles.textStyle}>Is the goal clear for the user?</Text>
          <Text style={styles.textStyle}>
            Does the user clearly know what they are coming on the app for?
          </Text>
          <Text style={styles.textStyle}>
            Do they know what they have to do, when they are on your app?
          </Text>
          <Text style={styles.textStyle}>
            Does the user get clear feedback on their actions?
          </Text>
          <Text style={styles.textStyle}>
            Do they know if they have been able to do something successfully or
            not?
          </Text>
          <Text style={styles.textStyle}>
            What is the ideal user behavior we want on the app?
          </Text>
          <Text style={styles.textStyle}>
            Does the app give feedback to encourage that?
          </Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'pink' }]}
            onPress={() => this.props.navigation.navigate('Camera')}>
            <Text style={styles.buttonText}>Camera</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
    alignItems: 'center',
  },
  textStyle: {
    marginTop: 12,
    marginLeft: 5,
    fontSize: 20,
    fontFamily: 'courier new',
    fontWeight: 'bold',
  },
  buttonText: {
    fontWeight: 'bold',
    fontFamily: 'arial',
    fontSize: 15,
  },
  cameraImage: {
    scale: 0.002,
    // scaleY : 0.002
  },
});
