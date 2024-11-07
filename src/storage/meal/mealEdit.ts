import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";
import { mealDeleteById } from "./mealDeleteById";
import { createMeal } from "./createMeal";

export async function mealEdit(newMeal: MealStorageDTO) {
    try {
        await mealDeleteById(newMeal.id);

        await createMeal(newMeal);
    } catch (error) {
        throw error;
    }
}