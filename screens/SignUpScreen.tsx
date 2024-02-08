import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, createUserWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth';
import SignInUp, { signInUpValue } from '../components/signInUp';

const auth = getAuth();

const SignUpScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  async function signUp(email: string, password: string): Promise<signInUpValue> {
    const value = {
      email: email,
      password: password,
      error: ''
    }
    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate('Sign In');
    } catch (error: any) {
      value.error = error.message;
    }
    return value;
  }
  return (
    <SignInUp formCallback={signUp} submitButtonText='Sign Up'></SignInUp>
  )
  // return (
  //   <View style={styles.container}>
  //     <Text>Signup screen!</Text>

  //     {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}

  //     <View style={styles.controls}>
  //       <Input
  //         placeholder='Email'
  //         containerStyle={styles.control}
  //         value={value.email}
  //         onChangeText={(text) => setValue({ ...value, email: text })}
  //         leftIcon={<Icon
  //           name='envelope'
  //           size={16} />} autoCompleteType={undefined} />

  //       <Input
  //         placeholder='Password'
  //         containerStyle={styles.control}
  //         value={value.password}
  //         onChangeText={(text) => setValue({ ...value, password: text })}
  //         secureTextEntry={true}
  //         leftIcon={<Icon
  //           name='key'
  //           size={16} />} autoCompleteType={undefined} />
  //       <Button title="Sign up" buttonStyle={styles.control} onPress={signUp} />
  //     </View>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },

  controls: {
    flex: 1,
    width: "90%"
  },

  control: {
    marginTop: 10
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  }
});

export default SignUpScreen;
