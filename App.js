import * as React from 'react';
import { View } from 'react-native';
import Home from './screens/Home';
import Camera from './screens/Camera'; 
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component{
  render() { 
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  Home:Home,
  Camera:Camera
})

const AppContainer = createAppContainer(AppNavigator)
