import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl, SafeAreaView, ScrollView } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { getAuth, signOut } from 'firebase/auth';
import { StackScreenProps } from '@react-navigation/stack';
import RecipeCard, { recipeType } from '../components/recipeCard';
import recipesCollection from '../data/recipes';
import { collection, query, where, limit, orderBy, startAt, getDoc, getDocs, Timestamp } from 'firebase/firestore';
import getRecipes from '../data/recipes';

const auth = getAuth();

const HomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const [recipes, setRecipes] = React.useState<recipeType[]>([]);
  const limitNum = 100;

  const getRecipesInteral = async () => {
    let cursor = recipes[recipes.length - 1]?.name ?? '';
    let recipesResponse = await getRecipes(cursor, limitNum);
    setRecipes([...recipes, ...recipesResponse])
  }
  useEffect(() => {
    // setRecipes(recipesTest);
    getRecipesInteral();
  }, [])

  //test array with 100 elements
  const recipesTest = new Array(100).fill(0).map((_, i) => {
    return {
      id: i.toString(),
      createdDate: Timestamp.now(),
      lastModified: Timestamp.now(),
      name: `Recipe ${i}`,
      description: `Description ${i}`,
      ingredients: [`Ingredient ${i}`],
      instructions: [`Instruction ${i}`],
      images: ['https://via.placeholder.com/150']
    }
  })
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setRecipes([]);
    let recipesResponse = await getRecipes('', limitNum);
    setRecipes([...recipesResponse])
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList refreshing={refreshing}
        refreshControl={
          <RefreshControl tintColor={'black'} refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.container}
        data={recipes}
        numColumns={2}
        key={2}
        keyExtractor={(item) => item.id}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        renderItem={({ item }) => <RecipeCard recipe={item}></RecipeCard>}
      />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#FFADFA',
    paddingHorizontal: 10,
  },
  button: {
    fontSize: 32,
    borderRadius: 25,
    display: 'flex'
  }
});
export default HomeScreen