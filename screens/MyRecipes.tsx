import { useAuthentication } from "../utils/hooks/useAuthentication";
import { StyleSheet, Text, Button, View } from 'react-native';

export default function HomeScreen() {
  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
      <header>title="My Recipes"</header>
      Button title="Uploads"
      Button title="Saved"
      Button title="Shared"
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B3654',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10
  }
})