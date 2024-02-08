import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import HomeScreen from '../screens/Home';
import MyRecipes from '../screens/MyRecipes';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.stack,
      }}>
      <Stack.Screen
        name="ReciPal"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <Button buttonStyle={styles.plusbutton} title="+"
              titleStyle={styles.plusbuttonText} onPress={() => ""} />
          ),
        }}
      />
      <Stack.Screen
        name="My Recipes"
        options={{
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 32,
          },
          headerBackTitle: "Back",
          headerRight: () => (
            <Button buttonStyle={styles.plusbutton} title="+"
              titleStyle={styles.plusbuttonText} onPress={() => ""} />
          ),

        }}
        component={
          MyRecipes
        }
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  stack: {
    backgroundColor: "#FFADFA",
  },
  plusbutton: {
    backgroundColor: "inherit",
    borderRadius: 25,
    marginRight: 20,
    padding: 0,
  },
  plusbuttonText: {
    fontSize: 32,
    color: "black",
  }
});