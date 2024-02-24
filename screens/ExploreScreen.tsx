import { FlatList, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { FlatListItemSeparator } from '../components/flatListItemSeparator';

export default function ExploreScreen() {

  type Recipe = {
    id: number,
    title: string
  }

  const recipes = [{
    id: 1,
    title: 'Lasagna'
  },
  {
    id: 2,
    title: 'Pizza'
  }]

  const ExploreCard: React.FC<Recipe> = ({ id, title }) => {

    const styles = StyleSheet.create({
      card: {
        backgroundColor: 'lightgray',
        // borderStyle: 'solid',
        // borderColor: 'grey',
        // borderWidth: 2,
        height: 50
      },
    });

    console.log(id, title)

    return (
      <View style={styles.card}>
        <Text>{title}</Text>
      </View>
    )

  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Explore</Text>
      <FlatList
        style={styles.exploreList}
        data={recipes}
        // keyExtractor={({ id, title }) => {id}}
        // refreshing={isRefreshing}
        ItemSeparatorComponent = {FlatListItemSeparator}
        renderItem={({ item }) => <ExploreCard id={item.id} title={item.title}></ExploreCard>}
      />
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#4f8c5f',
  },
  header: {
    fontSize: 24,
    color: 'white',
    fontWeight: '300'
  },
  exploreList: {
    width: '100%',
    backgroundColor: 'white'
  }
});