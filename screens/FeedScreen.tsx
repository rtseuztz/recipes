import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { getAuth, signOut } from 'firebase/auth';
import { StackScreenProps } from '@react-navigation/stack';
import RecipeCard, { RecipeType } from '../components/recipeCard';
import recipesCollection from '../data/recipes';
import { collection, query, where, limit, orderBy, startAt, getDoc, getDocs, Timestamp } from 'firebase/firestore';
import getRecipes from '../data/recipes';

const auth = getAuth();

export default function FeedScreen() {

  const { user } = useAuthentication();
  const [recipes, setRecipes] = React.useState<RecipeType[]>([])
  const [offsetNum, setOffsetNum] = React.useState(0)
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const limitNum = 10

  const getFeedRecipes = async () => {
    setIsRefreshing(true);
    setRecipes(await getRecipes(offsetNum, limitNum))
    // add multiple of the same recipe
    setOffsetNum(offsetNum + limitNum)
    console.log(recipes)
    setIsRefreshing(false);
  }

  useEffect(() => {
    getFeedRecipes();
  }, [])

  function onRefresh() {
    getFeedRecipes();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Feed</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        refreshing={isRefreshing}
        renderItem={({ item }) => <RecipeCard recipe={item}></RecipeCard>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4f8c5f',
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    color: 'white',
    fontWeight: '300'
  },
  button: {
    fontSize: 32,
    borderRadius: 25,
    display: 'flex'
  }
});
