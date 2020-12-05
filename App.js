import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/pages/Home/HomeScreen';
import MainMenu from './src/pages/MainMenu/MainMenu';

import IntroPage1 from './src/pages/Intro/IntroPage1';
import Part1Menu from './src/pages/Part1/Part1Menu';
import Planning from './src/pages/Part1/Planning';
import Responsibilities from './src/pages/Part1/Responsibilities';
import RiskAssessment from './src/pages/Part1/RiskAssessment';
import TrainingAndCompetence from './src/pages/Part1/TrainingAndCompetence';
import UsingThisCode from './src/pages/Part1/UsingThisCode';

import Page1 from './src/pages/Pages-1-30/Page1';
import Page2 from './src/pages/Pages-1-30/Page2';
import Page3 from './src/pages/Pages-1-30/Page3';
import Page4 from './src/pages/Pages-1-30/Page4';
import Page5 from './src/pages/Pages-1-30/Page5';
import Page6 from './src/pages/Pages-1-30/Page6';
import Page7 from './src/pages/Pages-1-30/Page7';
import Page8 from './src/pages/Pages-1-30/Page8';
import Page9 from './src/pages/Pages-1-30/Page9';
import Page10 from './src/pages/Pages-1-30/Page10';
import Page11 from './src/pages/Pages-1-30/Page11';
import Page12 from './src/pages/Pages-1-30/Page12';
import Page13 from './src/pages/Pages-1-30/Page13';
import Page14 from './src/pages/Pages-1-30/Page14';
import Page15 from './src/pages/Pages-1-30/Page15';
import Page16 from './src/pages/Pages-1-30/Page16';
import Page17 from './src/pages/Pages-1-30/Page17';
import Page18 from './src/pages/Pages-1-30/Page18';
import Page19 from './src/pages/Pages-1-30/Page19';
import Page20 from './src/pages/Pages-1-30/Page20';
import Page21 from './src/pages/Pages-1-30/Page21';
import Page22 from './src/pages/Pages-1-30/Page22';
import Page23 from './src/pages/Pages-1-30/Page23';
import Page24 from './src/pages/Pages-1-30/Page24';
import Page25 from './src/pages/Pages-1-30/Page25';
import Page26 from './src/pages/Pages-1-30/Page26';
import Page27 from './src/pages/Pages-1-30/Page27';
import Page28 from './src/pages/Pages-1-30/Page28';
import Page29 from './src/pages/Pages-1-30/Page29';
import Page30 from './src/pages/Pages-1-30/Page30';

const navigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    MainMenu: MainMenu,
    IntroPage1: IntroPage1,
    Part1Menu: Part1Menu,
    Planning: Planning,
    Responsibilities: Responsibilities,
    RiskAssessment: RiskAssessment,
    TrainingAndCompetence: TrainingAndCompetence,
    UsingThisCode: UsingThisCode,
    Page1: Page1,
    Page2: Page2,
    Page3: Page3,
    Page4: Page4,
    Page5: Page5,
    Page6: Page6,
    Page7: Page7,
    Page8: Page8,
    Page9: Page9,
    Page10: Page10,
    Page11: Page11,
    Page12: Page12,
    Page13: Page13,
    Page14: Page14,
    Page15: Page15,
    Page16: Page16,
    Page17: Page17,
    Page18: Page18,
    Page19: Page19,
    Page20: Page20,
    Page21: Page21,
    Page22: Page22,
    Page23: Page23,
    Page24: Page24,
    Page25: Page25,
    Page26: Page26,
    Page27: Page27,
    Page28: Page28,
    Page29: Page29,
    Page30: Page30,
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      title: 'Welcome',
    },
  }
);

export default createAppContainer(navigator);
