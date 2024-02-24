// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, signOut } from 'firebase/auth';
import * as React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text
} from 'react-native';
import { Button } from 'react-native-elements';

const auth = getAuth();

const ProfileScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Profile</Text>
            <View style={styles.buttonContainer}>
                <Button title="My Recipes" buttonStyle={styles.button} titleStyle={styles.title} onPress={() => navigation.navigate("My Recipes")} />
                <Button title="Log Out" buttonStyle={styles.button} titleStyle={styles.title} onPress={() => signOut(auth)}></Button>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#4f8c5f',
        // width: '100%'
    },
    header: {
        fontSize: 24,
        color: 'white',
        fontWeight: '300'
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        width: '100%'
    },
    button: {
        marginTop: 16,
        width: 256,
        borderStyle: 'solid',
        borderColor: 'lightgray',
        borderWidth: 1
    },
    title: {
        fontSize: 18
    },
});

export default ProfileScreen;