import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors, View} from 'react-native-ui-lib';

interface IMainContainer {
  children: React.ReactNode;
}

export const MainContainer = ({children}: IMainContainer) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top + 20, paddingBottom: insets.bottom},
      ]}
    >
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.dark} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
