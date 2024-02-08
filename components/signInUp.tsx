import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

export type signInUpValue = {
    email: string,
    password: string,
    error: string
}
export default function SignInUp({ formCallback, submitButtonText }: {
    formCallback: (email: string, password: string) => Promise<signInUpValue>,
    submitButtonText: string
}) {
    const [value, setValue] = React.useState<signInUpValue>({
        email: '',
        password: '',
        error: ''
    })
    async function middleware() {
        if (value.email === '' || value.password === '') {
            setValue({ ...value, error: 'Email and password are mandatory.' })
            return;
        }
        setValue(await formCallback(value.email, value.password))
    }
    return (
        <View style={styles.container}>
            {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}

            <View style={styles.controls}>
                <Input
                    placeholder='Email'
                    containerStyle={styles.control}
                    value={value.email}
                    onChangeText={(text) => setValue({ ...value, email: text })}
                    leftIcon={<Icon
                        name='envelope'
                        size={16} />} autoCompleteType={undefined} />

                <Input
                    placeholder='Password'
                    containerStyle={styles.control}
                    value={value.password}
                    onChangeText={(text) => setValue({ ...value, password: text })}
                    secureTextEntry={true}
                    leftIcon={<Icon
                        name='key'
                        size={16} />} autoCompleteType={undefined} />
                <Button title={submitButtonText} buttonStyle={styles.control} onPress={middleware} />
            </View>
        </View>
    )
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