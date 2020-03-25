import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { getUser } from '../../redux/modules/user';

const HomeScreen: React.FC = () => {
  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text>HOME SCREEN</Text>
    </View>
  );
};

export default HomeScreen;
