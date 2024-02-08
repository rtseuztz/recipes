import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';
import { StackScreenProps } from '@react-navigation/stack';
import { Card } from '@rneui/themed';

const auth = getAuth();

const HomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
      <Card>
        <Text>Welcome to the Recipe App</Text>
      </Card>
      {/* <Button buttonStyle={styles.button} title="Message Board" titleStyle={styles.button} onPress={() => { }} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFADFA',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    fontSize: 32,
    borderRadius: 25,
    display: 'flex'
  }
});
export default HomeScreen