import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomNav from './components/bottomNav';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.flex}>
        <NavigationContainer>
          <StackNav />
        </NavigationContainer>
      </View>
    </>
  );
};

const Stack = createStackNavigator();
const StackNav: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomNav"
        component={BottomNav}
        options={{
          title: 'SAKE BOARD',
          headerTintColor: '#333',
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default App;
