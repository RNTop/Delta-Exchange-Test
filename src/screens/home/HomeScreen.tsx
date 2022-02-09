import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {View} from 'react-native-ui-lib';
import {DropdownPicker, MainContainer} from '../../components';
import {STRINGS} from '../../constants';
import {PRODUCTS} from '../../constants/products';
import {ENV} from '../../delta-exchange-expport';
import {useWebSocket} from '../../hooks/useWebSocket';
import {ORDERBOOK_TYPE} from '../../models';
import {ListItem, OrderBookSwitch} from './components';

export interface IHomeScreen {}

const HomeScreen = () => {
  const {buy, sell, symbol, setSymbol} = useWebSocket(ENV.SOCKET_URL);
  const [active, setActive] = useState<ORDERBOOK_TYPE>(ORDERBOOK_TYPE.BUY);
  return (
    <MainContainer>
      <DropdownPicker
        title={STRINGS.product}
        placeholder={STRINGS.product}
        value={symbol}
        onChange={setSymbol}
        options={PRODUCTS}
      />
      <OrderBookSwitch active={active} onSwitch={setActive} />
      {active !== ORDERBOOK_TYPE.SELL && (
        <FlatList
          data={buy}
          renderItem={({item, index}) => <ListItem index={index} data={item} />}
        />
      )}
      {active === ORDERBOOK_TYPE.BOTH && <View height={30} />}
      {active !== ORDERBOOK_TYPE.BUY && (
        <FlatList
          data={sell}
          renderItem={({item, index}) => (
            <ListItem isBuy={false} index={index} data={item} />
          )}
        />
      )}
    </MainContainer>
  );
};

export default HomeScreen;
