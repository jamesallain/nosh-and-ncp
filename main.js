import Expo, { Constants } from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

import PatientScreen from './src/screens/PatientScreen';
import NutritionOrderScreen from './src/screens/NutritionOrderScreen';


// (function(PolyfillSet) {
//   if (!PolyfillSet) {
//     return;
//   }
//   var testSet = new PolyfillSet();
//   if (testSet.size === undefined) {
//     if (testSet._c.size === 0) {
//       Object.defineProperty(PolyfillSet.prototype, 'size', {
//         get: function() {
//           return this._c.size;
//         },
//       });
//     }
//   }
// })(require('babel-runtime/core-js/set').default);

class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      auth: { screen: AuthScreen },
      welcome: { screen: WelcomeScreen },
      main: { 
        screen: TabNavigator({
          patient: { screen: PatientScreen },
          nutritionOrder: { screen: NutritionOrderScreen }          

        })
      }     
    }, 
    { tabBarOptions: {
        style: {
          width: 300,
        },
      }
    });

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
})



Expo.registerRootComponent(App);
