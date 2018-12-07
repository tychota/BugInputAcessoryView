// @flow
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { YellowBox } from 'react-native';
import { useScreens } from 'react-native-screens';

import { A } from './screens/A';
import { B } from './screens/B';
import { C } from './screens/C';

useScreens();
// Remove inputAccesoryView warning
YellowBox.ignoreWarnings(['']);

const AppNavigator = createStackNavigator(
  {
    A: {
      screen: A,
    },
    B: {
      screen: B,
    },
    C: {
      screen: C,
    },
  },
  {
    initialRouteName: 'A',
  }
);

export default createAppContainer(AppNavigator);
