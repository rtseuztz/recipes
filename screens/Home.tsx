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
      <Button buttonStyle={styles.button} title="My Recipes" titleStyle={styles.button} onPress={() => navigation.navigate("MyRecipes")} />
      <Button buttonStyle={styles.button} title="Search 🔎" titleStyle={styles.button} onPress={() => signOut(auth)} />
      <Button buttonStyle={styles.button} title="Message Board" titleStyle={styles.button} onPress={() => signOut(auth)} />
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
    marginTop: 12,
    fontSize: 32
  }
});
export default HomeScreen