import { Card, Image } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import { Timestamp } from "firebase/firestore";
export type recipeType = {
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
export default function RecipeCard({ recipe }: { recipe: recipeType }) {
    return (
        <Card containerStyle={styles.container}>
            <Image style={styles.imageStyle} onLoad={hello} source={{ uri: recipe.images[0] }} />
        </Card>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 15,
        width: "100%",
        height: 300,
        marginTop: 0,
        marginBottom: 2,
        marginHorizontal: 2
    },
    imageStyle: {
        width: "100%",
        height: "100%",
    }
});