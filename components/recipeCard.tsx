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

export default function RecipeCard({ recipe }: { recipe: recipeType }) {
    return (
        <Card containerStyle={styles.container}>
            <Image containerStyle={styles.imgContainer} source={{ uri: recipe.images[0] }} />
            <View style={styles.textContainer}>
                <Text style={styles.recipeName}>{recipe.name}</Text>
            </View>
        </Card>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFADFA', //needed a color for infinite scroll
        shadowColor: 'transparent',
        borderColor: 'transparent',
        padding: 0,
        margin: 0,
        marginHorizontal: 2,
        marginTop: 2,
        height: 300,

    },
    textContainer: {
        zIndex: 1,
        maxHeight: "15%",
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        height: "100%",
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        justifyContent: 'flex-end'
    },
    recipeName: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
        zIndex: 1,
    },
    imgContainer: {
        flex: 1,
        height: 300,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#fff',
        position: 'absolute',
        width: '100%',
        borderRadius: 15,
    }
});