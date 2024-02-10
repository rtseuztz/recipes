import { QueryConstraint, collection, getDocs, limit, orderBy, query, startAfter, startAt, where } from "firebase/firestore"
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import db from "./_db";
import { recipeType } from "../components/recipeCard";
import storage from "./_storage";

const recipesCollection = collection(db, "recipes");
const imageRef = ref(storage)
export default async function getRecipes(lastItemName: string, lim: number) {
    let constraints: QueryConstraint[] = [orderBy("name"), limit(lim)];
    if (lastItemName) {
        constraints.push(startAfter(lastItemName));
    }
    const q = query(recipesCollection, ...constraints);
    const querySnapshot = await getDocs(q);
    const recipes: recipeType[] = [];
    querySnapshot.forEach((doc) => {
        recipes.push(doc.data() as recipeType);
    });
    //get images for each recipe
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        const images = recipe.images;
        const imageUrls: string[] = [];
        for (let j = 0; j < images.length; j++) {
            const image = images[j];
            const imageUrl = await getDownloadURL(ref(storage, image))
            imageUrls.push(imageUrl);
        }
        recipe.images = imageUrls;
    }
    return recipes;
}