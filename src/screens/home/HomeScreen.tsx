import React from 'react';
import {FlatList} from 'react-native';
import {DropdownPicker, MainContainer} from '../../components';
import {PRODUCTS} from '../../constants/products';
import {ENV} from '../../delta-exchange-expport';
import {useWebSocket} from '../../hooks/useWebSocket';
import {ListItem} from './components';
export interface IHomeScreen {}

const HomeScreen = () => {
  const {buy, symbol, setSymbol} = useWebSocket(ENV.SOCKET_URL);
  return (
    <MainContainer>
      <DropdownPicker
        title={'PRODUCT'}
        placeholder={'PRODUCT'}
        value={symbol}
        onChange={setSymbol}
        options={PRODUCTS}
      />
      <FlatList
        data={buy}
        renderItem={({item}) => (
          <ListItem price={item.limit_price} quantity={item.size} />
        )}
      />
    </MainContainer>
  );
};

export default HomeScreen;
