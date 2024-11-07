import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealStorageDTO } from "./MealStorageDTO";
import { MEALS_COLLECTION } from "@storage/storageConfig";

export async function mealFindById(mealId: number): Promise<MealStorageDTO> {
  try {
    const meals = await AsyncStorage.getItem(MEALS_COLLECTION);
    if (!meals) {
      throw new Error("No meals found");
    }

    const parsedMeals: MealStorageDTO[] = JSON.parse(meals);

    const meal = parsedMeals.find((meal) => meal.id === mealId);

    if (!meal) {
      throw new Error("Meal not found");
    }

    return meal;
  } catch (error) {
    throw error;
  }
}