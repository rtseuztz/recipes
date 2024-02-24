import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import MyRecipesScreen from '../screens/MyRecipesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.stack,
      }}
    >
      <Stack.Screen
        name="Profile"
        options={{
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 32,
          },
        }}
        component={ProfileScreen}
      />
      <Stack.Screen
        name="My Recipes"
        options={{
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          //   fontSize: 32,
          // },
          headerShown: false,
          headerBackTitle: "Back",
          headerRight: () => (
            <Button buttonStyle={styles.plusButton} title="+"
              titleStyle={styles.plusButtonText} onPress={() => ""} />
          ),
        }}
        component={MyRecipesScreen}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  stack: {
    backgroundColor: '#4f8c5f',
  },
  plusButton: {
    backgroundColor: "#FFADFA",
    borderRadius: 25,
    marginRight: 20,
    padding: 0,
  },
  plusButtonText: {
    fontSize: 32,
    color: "blue",
  }
});