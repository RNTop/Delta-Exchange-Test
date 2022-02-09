import React, {useState} from 'react';
import {ORDERBOOK_TYPE} from '../../models';
import HomeScreen, {IHomeScreen} from './HomeScreen';

/*
Here, please do define the contollders && handlers
*/

const HomePresenter = () => {
  const [active, setActive] = useState<ORDERBOOK_TYPE>(ORDERBOOK_TYPE.BUY);
  const homeScreenProps: IHomeScreen = {
    active,
    setActive,
  };
  return <HomeScreen {...homeScreenProps} />;
};

export default HomePresenter;
