import React from 'react';
import {AppNavigator} from './navigation';
import {Typography, Colors} from 'react-native-ui-lib';
import {COLORS, TYPOGRAPHIES} from './constants';

Colors.loadColors(COLORS);
Typography.loadTypographies(TYPOGRAPHIES);

const App = () => {
  return <AppNavigator />;
};

export default App;
