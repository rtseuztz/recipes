import { useAuthentication } from "../utils/hooks/useAuthentication";
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { fonts } from "react-native-elements/dist/config";
import {
  useFonts,
  Roboto_400Regular,
  Bangers_400Regular,
  OpenSans_400Regular,
  Roboto_400Regular_Italic
} from "@expo-google-fonts/dev";

export default function MyRecipes() {
  const { user } = useAuthentication();

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic

  });
  Font

  return (
    <View style={styles.container}>
      <View style={styles.buttoncontainer}>
        <Button buttonStyle={styles.button} title="Uploads"
          titleStyle={styles.button} onPress={() => ""} />
        <Button buttonStyle={styles.button} title="Saved"
          titleStyle={styles.button} onPress={() => ""} />
        <Button buttonStyle={styles.button} title="Shared"
          titleStyle={styles.button} onPress={() => ""} />
      </View>
      <Text style={{ fontFamily: "Roboto_400Regular_Italic" }}>
        hi
      </Text>

      <View style={styles.addcontainer}>
        <Button buttonStyle={styles.plusbutton} title="+"
          titleStyle={styles.plusbuttonText} onPress={() => ""} />
      </View>

    </View >

  );
}
const styles = StyleSheet.create({
  buttoncontainer: {
    backgroundColor: 'rgb(153, 5, 79)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    width: "100%",
    paddingTop: "5%",
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(153, 5, 79)',
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