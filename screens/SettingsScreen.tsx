// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, signOut } from 'firebase/auth';
import * as React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
} from 'react-native';
import { Button } from 'react-native-elements';
const auth = getAuth();
const SettingsScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <Button title="Log Out" buttonStyle={styles.button} onPress={() => signOut(auth)}></Button>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    button: {
        padding: 10,
        marginTop: 16,
    },
});
export default SettingsScreen;