import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native-ui-lib';

interface IListItem {
  price: string;
  quantity: string;
}

export const ListItem = ({price, quantity}: IListItem) => (
  <View style={styles.constainer}>
    <Text white>{price}</Text>
    <Text white>{quantity}</Text>
  </View>
);

const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
