import { collection, getDocs, limit, orderBy, query, startAt, where } from "firebase/firestore"
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import db from "./_db";
import { recipeType } from "../components/recipeCard";
import storage from "./_storage";

const recipesCollection = collection(db, "recipes");
const imageRef = ref(storage)
export default async function getRecipes(offset: number, lim: number) {
    const q = query(recipesCollection, limit(lim), orderBy("name"), startAt(offset));
    const querySnapshot = await getDocs(q);
    const recipes: recipeType[] = [];
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
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
        console.log(recipe);
    }
    return recipes;
}