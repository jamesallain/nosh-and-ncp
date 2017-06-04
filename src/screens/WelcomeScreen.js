import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
//import { Container, Button, Text } from 'native-base';
import Slides from '../components/Slides'


const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#3A9F4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '3A9F4' }
];


class WelcomeScreen extends Component {
  //if use arrow function don't need -- .bind(this)
  //navigation always gets passed as props with react-navigation -- if it is render from TabNavigator, StackNavigator, etc.
  onSlidesComplete = () => {
    this.props.navigation.navigate('Auth')
  }

  render(){
    return (
      <View>
        <Slides 
          data={SLIDE_DATA} 
          onComplete={this.onSlidesComplete} />
      </View>
    );
  }
}

export default WelcomeScreen;