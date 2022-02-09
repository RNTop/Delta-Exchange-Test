import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Text, View} from 'react-native-ui-lib';
import {IBuyItem} from '../../../models';

interface IListItem {
  index: number;
  data: IBuyItem;
  isBuy?: boolean;
}

export const ListItem = ({data, isBuy = true, index}: IListItem) => (
  <View
    style={[
      styles.constainer,
      {
        backgroundColor:
          index % 2 === 0 ? Colors.transparent : Colors.lightDark,
      },
    ]}
  >
    <Text style={{color: isBuy ? Colors.green40 : Colors.red40}}>
      {data.size}
    </Text>
    <Text white>{data.limit_price}</Text>
  </View>
);

const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});
