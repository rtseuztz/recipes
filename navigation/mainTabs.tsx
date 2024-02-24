import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserStack from './profileStack';
import SettingsScreen from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import FeedScreen from '../screens/FeedScreen';
import ProfileStack from './profileStack';
import ExploreScreen from '../screens/ExploreScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerStyle: styles.stack,
                    tabBarStyle: {
                        height: 80,
                        paddingTop: 4,
                    },
                    tabBarItemStyle: {},
                }}>
                <Tab.Screen
                    name='Explore'
                    component={ExploreScreen}
                    options={{
                        tabBarLabel: 'Explore',
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name='search' color={color} size={22} />
                        ),
                    }}
                />
                <Tab.Screen
                    name='Feed'
                    component={FeedScreen}
                    options={{
                        tabBarLabel: 'Feed',
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name='reorder-three' color={color} size={34} />
                        ),
                    }}
                />
                <Tab.Screen
                    name='Profile'
                    component={ProfileStack}
                    options={{
                        tabBarLabel: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name='user-circle' color={color} size={24} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    stack: {
        backgroundColor: '#FFADFA',
    },

});