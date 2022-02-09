import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Text, View} from 'react-native-ui-lib';
import {usePrevious} from '../../../hooks';
import {IBuyItem} from '../../../models';

interface IListItem {
  index: number;
  data: IBuyItem;
  isBuy?: boolean;
}

export const ListItem = ({data, isBuy = true, index}: IListItem) => {
  const [bgColor, setBgColor] = useState<string | undefined>(undefined);
  const prevSize = usePrevious(data.size);
  useEffect(() => {
    let isMounted = true;
    const changeBackground = () => {
      if (isMounted && prevSize) {
        if (parseFloat(data.size) > parseFloat(prevSize)) {
          setBgColor(index % 2 === 0 ? Colors.blinkGreen : Colors.blinkGreen1);
        } else {
          setBgColor(index % 2 === 0 ? Colors.blinkRed : Colors.blinkRed1);
        }
        setTimeout(() => {
          isMounted && setBgColor(undefined);
        }, 100);
      }
    };
    changeBackground();
    return () => {
      isMounted = false;
    };
  }, [data.size, prevSize, index, setBgColor]);

  return (
    <View
      style={[
        styles.constainer,
        {
          backgroundColor:
            bgColor ||
            (index % 2 === 0 ? Colors.transparent : Colors.lightDark),
        },
      ]}
    >
      <Text style={{color: isBuy ? Colors.green40 : Colors.red40}}>
        {data.size}
      </Text>
      <Text white>{data.limit_price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});
