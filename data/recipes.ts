import { collection, getDocs, limit, query, where } from "firebase/firestore"
import db from "./db";

const recipesCollection = collection(db, "recipes");
export default recipesCollection;