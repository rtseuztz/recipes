import { Card, Image } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import { Timestamp } from "firebase/firestore";
export type RecipeType = {
    id: string,
    createdDate: Timestamp,
    lastModified: Timestamp,
    name: string,
    description: string,
    ingredients: string[],
    instructions: string[],
    tags?: string[],
    images: string[],
    imageBlobs?: Blob[]
}
function hello() {
    console.log("hello")
}
export default function RecipeCard({ recipe }: { recipe: RecipeType }) {
    return (
        <Card containerStyle={styles.card}>
            <Text style={styles.title}>{recipe.name}</Text>
            <Text style={styles.description}>{recipe.description}</Text>
            <Image style={styles.image} onLoad={hello} source={{ uri: recipe.images[0] }} />
        </Card>
    )
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        height: 400,
        marginTop: 4,
        marginBottom: 12,
        marginHorizontal: 2,
        shadowColor: "lightgray",
        shadowOffset: {
            width: -2,
            height: -2
        }
    },
    image: {
        width: "100%",
        height: "90%",
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "400",
        marginBottom: 4,
    },
    description: {
        color: 'gray',
        marginBottom: 8,
    }
});