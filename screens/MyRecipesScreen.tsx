import { useAuthentication } from "../utils/hooks/useAuthentication";
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function MyRecipesScreen() {
  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
      <View style={styles.buttoncontainer}>
        <Button buttonStyle={styles.button} title="Uploads" titleStyle={styles.button} onPress={() => ""} />
        <Button buttonStyle={styles.button} title="Saved" titleStyle={styles.button} onPress={() => ""} />
        <Button buttonStyle={styles.button} title="Shared" titleStyle={styles.button} onPress={() => ""} />
      </View>
      <Text>
        hi
      </Text>
    </View >
  );
}
const styles = StyleSheet.create({
  buttoncontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    width: "100%",
    paddingTop: "5%",
  },
  container: {
    flex: 1,
    backgroundColor: '#4f8c5f',
    alignItems: 'flex-start',
  },
  button: {
    display: "flex",
    backgroundColor: 'rgb(255, 255, 255)',
    color: 'rgb(230,57,207)',

  },
  addcontainer: {
    display: "flex",
    alignItems: "flex-end",
    width: "100%",
    paddingRight: "5%",
    paddingTop: "5%",
    borderRadius: 800,
  },
  plusbutton: {
    borderRadius: 80,
    backgroundColor: "rgb(230,57,207)"
  },
  plusbuttonText: {
    borderRadius: 800,
    fontSize: 40,
    minWidth: 50,
    minHeight: 50,
    color: 'rgb(255,255,255)',
    marginTop: -4.5
  }
})