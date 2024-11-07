import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealStorageDTO } from "./MealStorageDTO";
import { MEALS_COLLECTION } from "@storage/storageConfig";

export async function createMeal(meal: MealStorageDTO) {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    let meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    const formatedMeals = [...meals, meal];

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(formatedMeals));
  } catch (error) {
    throw error;
  }
}
