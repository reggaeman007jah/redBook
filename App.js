// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Red Book</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createStackNavigator, createAppContainer } from 'react-navigation-stack';

// import SearchScreen from './src/screens/SearchScreen';
// import ResultsShowScreen from './src/screens/ResultsShowScreen';
import HomeScreen from './src/pages/Home/HomeScreen';
import IntroPage1 from './src/pages/Intro/IntroPage1';
import Part1Menu from './src/pages/Part1/Part1Menu';
import Planning from './src/pages/Part1/Planning';
import Responsibilities from './src/pages/Part1/Responsibilities';
import RiskAssessment from './src/pages/Part1/RiskAssessment';
import TrainingAndCompetence from './src/pages/Part1/TrainingAndCompetence';
import UsingThisCode from './src/pages/Part1/UsingThisCode';

const navigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    IntroPage1: IntroPage1,
    Part1Menu: Part1Menu,
    Planning: Planning,
    Responsibilities: Responsibilities,
    RiskAssessment: RiskAssessment,
    TrainingAndCompetence: TrainingAndCompetence,
    UsingThisCode: UsingThisCode,
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      title: 'Welcome'
    }
  }
);

export default createAppContainer(navigator);