import React, { useState } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './styles';
import HomeScreen from '../../screen/home';
import SearchScreen from '../../screen/search';
import AddScreen from '../../screen/add';
import ListScreen from '../../screen/list';
import DetailScreen from '../../screen/detail';
import EditScreen from '../../screen/edit';
import { TabActions } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomNav: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="HOME"
        tabBarOptions={{
          activeTintColor: '#333',
          style: {
            backgroundColor: '#FFF',
          },
        }}
      >
        <Tab.Screen
          name="HOME"
          component={HomeStack}
          options={{
            tabBarLabel: 'ホーム',
            tabBarIcon: () => <View style={styles.tabIcon} />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{
            tabBarLabel: '検索',
            tabBarIcon: () => <View style={styles.tabIcon} />,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const Stack = createStackNavigator();
const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  );
};
const SearchStack: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Add" component={AddScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default BottomNav;
