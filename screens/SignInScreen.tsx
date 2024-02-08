import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { browserLocalPersistence, getAuth, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import SignInUp, { signInUpValue } from '../components/signInUp';

const auth = getAuth();

const SignInScreen = () => {

  async function signIn(email: string, password: string): Promise<signInUpValue> {
    const value: signInUpValue = {
      email: email,
      password: password,
      error: ''
    }
    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error: any) {
      value.error = error.message;
    }
    return value
  }

  return (
    <SignInUp formCallback={signIn} submitButtonText='Sign In'></SignInUp>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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

export default SignInScreen;
