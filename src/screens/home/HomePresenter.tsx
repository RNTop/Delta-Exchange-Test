import React from 'react';
import HomeScreen, {IHomeScreen} from './HomeScreen';

const HomePresenter = () => {
  const homeScreenProps: IHomeScreen = {};
  return <HomeScreen {...homeScreenProps} />;
};

export default HomePresenter;
