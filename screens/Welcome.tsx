import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import Animated, { FadeIn, FadeOut, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const DURATION = 1000;
  const DELAY = 500;
  const opacity1 = useSharedValue(0);
  const opacity2 = useSharedValue(0);
  const opacity3 = useSharedValue(0);
  opacity1.value = withDelay(1 * DELAY, withTiming(1, { duration: DURATION }))
  opacity2.value = withDelay(3 * DELAY, withTiming(1, { duration: DURATION }))
  opacity3.value = withDelay(6 * DELAY, withTiming(1, { duration: DURATION }))
  return (
    <View style={styles.container}>
      <Animated.Text style={{ ...styles.header, opacity: opacity1 }}>
        Welcome to
      </Animated.Text>
      <Animated.Text style={{ ...styles.header, opacity: opacity2 }}>
        ReciPal
      </Animated.Text>
      <Animated.View style={{ opacity: opacity3 }}>
        <Pressable style={styles.buttonBorder} onPress={() => navigation.navigate('Sign Up')}>
          <Text style={styles.buttonText}>Sign up</Text>
        </Pressable >
        <Pressable style={styles.buttonBorder} onPress={() => navigation.navigate('Sign In')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
        <Pressable style={styles.buttonBorder} onPress={() => navigation.navigate('Sign In')}>
          <Text style={styles.buttonText}>Continue without signing in</Text>
        </Pressable>
        {/*
        <Pressable title="Continue without an account" buttonStyle={styles.button} onPress={() => navigation.navigate('Sign In')} /> */}
      </Animated.View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#FFADFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 46,
  },
  buttonBorder: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonText: {
    margin: 10,
    fontSize: 24,
    color: "#571B1B",
  }
});

export default WelcomeScreen;
