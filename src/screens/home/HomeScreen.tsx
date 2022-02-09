import React from 'react';
import {FlatList} from 'react-native';
import {View} from 'react-native-ui-lib';
import {DropdownPicker, MainContainer} from '../../components';
import {STRINGS} from '../../constants';
import {PRODUCTS} from '../../constants/products';
import {ENV} from '../../delta-exchange-expport';
import {useOrderBook} from '../../hooks/useOrderBook';
import {ORDERBOOK_TYPE} from '../../models';
import {ListItem, OrderBookSwitch} from './components';

export interface IHomeScreen {
  active: ORDERBOOK_TYPE;
  setActive: React.Dispatch<React.SetStateAction<ORDERBOOK_TYPE>>;
}

const HomeScreen = (props: IHomeScreen) => {
  const {active} = props;
  const {buy, sell, symbol, setSymbol} = useOrderBook(ENV.SOCKET_URL);
  return (
    <MainContainer>
      <DropdownPicker
        title={STRINGS.product}
        placeholder={STRINGS.product}
        value={symbol}
        onChange={setSymbol}
        options={PRODUCTS}
      />
      <OrderBookSwitch active={active} onSwitch={props.setActive} />
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
