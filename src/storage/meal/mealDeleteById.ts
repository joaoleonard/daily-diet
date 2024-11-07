import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealDeleteById(id: number) {
    try {
        const meals = await AsyncStorage.getItem(MEALS_COLLECTION);
        if (!meals) {
            throw new Error("No meals found");
        }

        const parsedMeals: MealStorageDTO[] = JSON.parse(meals);

        const mealIndex = parsedMeals.findIndex((meal) => meal.id === id);

        if (mealIndex === -1) {
            throw new Error("Meal not found");
        }

        parsedMeals.splice(mealIndex, 1);

        await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(parsedMeals));
    } catch (error) {
        throw error;
    }
}