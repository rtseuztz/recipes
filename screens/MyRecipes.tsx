import { useAuthentication } from "../utils/hooks/useAuthentication";
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function MyRecipes() {
  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
      <Button buttonStyle={styles.button} title="Uploads"
        titleStyle={styles.button} onPress={() => ""} />
      <Button buttonStyle={styles.button} title="Saved"
        titleStyle={styles.button} onPress={() => ""} />
      <Button buttonStyle={styles.button} title="Shared"
        titleStyle={styles.button} onPress={() => ""} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(153, 5, 79)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  button: {
    display: "flex",
    backgroundColor: 'rgb(255, 255, 255)',
    color: 'rgb(230,57,207)',

  }
})