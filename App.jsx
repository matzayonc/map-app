import React, { Component } from 'react';
import { ActivityIndicator, MaskedViewComponent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Permissions from "expo-permissions";




import MapComp from './comp/MapComp'
import MyButton from './comp/MyButton'
import List from './comp/List'
import Start from './comp/Start'




import * as Font from "expo-font";



const Stack = createStackNavigator();


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { mode: 0, fontloaded: false }
  }


  componentDidMount = async () => {
    await Promise.all([
      this.setPermissions(),
      this.loadFonts()
    ])
  }

  loadFonts = async () => {
    await Font.loadAsync({
      'hack': require('./assets/hack.ttf'),
    })
    this.setState({ fontloaded: true })
  }


  setPermissions = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      alert('odmawiam przydzielenia uprawnień do czytania lokalizacji')
    }
  }

  render() {
    //<MapComp points={[{ lat: 50.083, lon: 20.030 }]}></MapComp>
    //<MyButton style={{ marginTop: 50 }} textStyle={{ fontFamily: 'hack' }} name='button0' callback={() => alert('ok')} />
    //<List />
    return this.state.fontloaded == false ? null : (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="start" component={Start} screenOptions={{ headerShow: false }} />
          <Stack.Screen name="list" component={List} />
          <Stack.Screen name="map" component={MapComp} />
        </Stack.Navigator>
      </NavigationContainer>

    )





  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
