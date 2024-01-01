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
        headerTintColor: "#fff"
      }}>
      <Stack.Screen
        name="RecipeBook"
        component={HomeScreen}
      />
      <Stack.Screen
        name="My Recipes"
        options={{
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 32,
            fontFamily: "Bangers_400Regular",
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
    backgroundColor: "#0B3654",
  },
  plusbutton: {
    backgroundColor: "inherit",
  },
  plusbuttonText: {
    fontSize: 12,
    color: 'rgb(255,255,255)',
  }
});