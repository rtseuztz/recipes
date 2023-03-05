import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';
import { StackScreenProps } from '@react-navigation/stack';

const auth = getAuth();

const HomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
      <Button title="My Recipes" titleStyle={styles.button} onPress={() => navigation.navigate("My Recipes")} />
      <Button title="Search 🔎" titleStyle={styles.button} onPress={() => signOut(auth)} />
      <Button title="Message Board" titleStyle={styles.button} onPress={() => signOut(auth)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B3654',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingTop
    fontSize: 32
  }
});
export default HomeScreen