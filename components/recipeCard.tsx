import { Card } from "@rneui/themed";
import { View, Text, StyleSheet, Image } from "react-native";
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
        <View style={styles.container}>
            <Card containerStyle={styles.container}>
                <Text>{recipe.name}</Text>
                <Text>{recipe.description}</Text>
                <Text>{recipe.createdDate.toDate().toDateString()}</Text>
                <Image style={styles.imageStyle} onLoad={hello} source={{ uri: recipe.images[0] }} />
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        width: "98%",
        height: 300,
        marginTop: 0,
        marginBottom: 1,
    },
    imageStyle: {
        width: 'auto',
        height: "100%",
    }
});