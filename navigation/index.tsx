import React from 'react';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import UserStack from './profileStack';
import AuthStack from './authStack';
import { Text } from 'react-native-elements';
import MainTabs from './mainTabs';

export default function RootNavigation() {
  const { user, loading } = useAuthentication();

  return loading ? <Text>Loading</Text> :
    user ? <MainTabs /> : <AuthStack />;
}
