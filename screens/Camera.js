import React from 'react';
import { Component } from 'react';
import { Text, View, ImageBackground,TouchableOpacity,StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import * as Permissions from "expo-permissions";

export default class Camera extends Component {

    getCameraPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);}

  render() { 
    return (
      <View>
      <ImageBackground source={require('../assets/camera.jpg')}>
       <Header
            backgroundColor={'red'}
            centerComponent={{
              text: 'Posture Corrector',
              style: { color: '#fff', fontSize: 20 },
            }}
          />
        <Text>Welcome To Posture App</Text>
                  <TouchableOpacity
            style={[styles.button, { backgroundColor: 'pink' }]}
            onPress={() => this.getCameraPermissions()}>
            <Text style={styles.buttonText}>Camera</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

