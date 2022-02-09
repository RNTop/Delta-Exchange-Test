import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Text, TouchableOpacity, View} from 'react-native-ui-lib';
import BuyIcon from '../../../resource/icons/buy.svg';
import SellIcon from '../../../resource/icons/sell.svg';
import BuySellIcon from '../../../resource/icons/buy-sell.svg';
import {ORDERBOOK_TYPE} from '../../../models';

interface ISwitchItem {
  icon: React.ReactNode;
  label: ORDERBOOK_TYPE;
  active: ORDERBOOK_TYPE;
  onPress: (value: ORDERBOOK_TYPE) => void;
}

export const SwitchItem = ({active, icon, label, onPress}: ISwitchItem) => {
  const isActive = active === label;
  return (
    <TouchableOpacity
      style={styles.switchItem}
      disabled={isActive}
      onPress={() => {
        onPress(label);
      }}
    >
      {icon}
      <Text marginL-8 style={{color: isActive ? Colors.white : Colors.grey30}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

interface IOrderBookSwitch {
  active: ORDERBOOK_TYPE;
  onSwitch: (value: ORDERBOOK_TYPE) => void;
}

export const OrderBookSwitch = ({onSwitch, active}: IOrderBookSwitch) => (
  <View style={styles.constainer}>
    <SwitchItem
      active={active}
      icon={<BuyIcon />}
      label={ORDERBOOK_TYPE.BUY}
      onPress={onSwitch}
    />
    <SwitchItem
      active={active}
      icon={<SellIcon />}
      label={ORDERBOOK_TYPE.SELL}
      onPress={onSwitch}
    />
    <SwitchItem
      active={active}
      icon={<BuySellIcon />}
      label={ORDERBOOK_TYPE.BOTH}
      onPress={onSwitch}
    />
  </View>
);

const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  switchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
});
