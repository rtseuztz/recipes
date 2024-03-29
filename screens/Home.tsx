import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { getAuth, signOut } from 'firebase/auth';
import { StackScreenProps } from '@react-navigation/stack';
import RecipeCard, { recipeType } from '../components/recipeCard';
import recipesCollection from '../data/recipes';
import { collection, query, where, limit, orderBy, startAt, getDoc, getDocs, Timestamp } from 'firebase/firestore';
import getRecipes from '../data/recipes';

const auth = getAuth();

const HomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const { user } = useAuthentication();
  const [recipes, setRecipes] = React.useState<recipeType[]>([])
  const [offsetNum, setOffsetNum] = React.useState(0)
  const limitNum = 10

  const recipe: recipeType = {
    id: "1",
    createdDate: new Timestamp(0, 0),
    lastModified: new Timestamp(0, 0),
    name: "Test",
    description: "Test",
    ingredients: ["Test"],
    instructions: ["Test"],
    images: ["Test"]
  }

  useEffect(() => {
    // const getRecipes = async () => {
    //   const q = query(recipesCollection, orderBy("name"), limit(limitNum), startAt(offsetNum))
    //   const querySnapshot = await getDocs(q)
    //   querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    //     setRecipes([...recipes, doc.data() as recipeCardType])
    //   });
    // }
    const getRecipesInteral = async () => {
      setRecipes(await getRecipes(offsetNum, limitNum))
      // add multiple of the same recipe
      setOffsetNum(offsetNum + limitNum)
      console.log(recipes)
    }
    getRecipesInteral();
  }, [])

  // const recipes: recipeCardType[] = recipes
  return (
    //   <Grid>
    //     <RecipeCard recipe={recipe}></RecipeCard>
    //     <RecipeCard recipe={recipe}></RecipeCard>
    //     <RecipeCard recipe={recipe}></RecipeCard>
    //   </Grid>
    <FlatList
      style={styles.container}
      data={recipes}
      numColumns={2}
      key={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <RecipeCard recipe={item}></RecipeCard>}
    />
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