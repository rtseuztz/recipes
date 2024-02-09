import { Card } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";

export type recipeCardType = {
    id: string,
    name: string,
    description: string,
    ingredients: string[],
    instructions: string[],
    tags?: string[],
    images: string[]
}
export default function RecipeCard({ recipe }: { recipe: recipeCardType }) {
    return (
        <View style={styles.container}>
            <Card containerStyle={styles.container}>
                <Text>{recipe.name}</Text>
                <Text>{recipe.description}</Text>
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
});