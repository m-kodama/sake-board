import React from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import BottomNav from './components/bottomNav';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.flex}>
          <StackNav />
        </View>
      </SafeAreaView>
    </>
  );
};

const StackNav = createStackNavigator({
  BottomNav: {
    screen: BottomNav,
    navigationOptions: {
      headerTintColor: '#000',
      header: null,
    },
  },
});

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default App;
