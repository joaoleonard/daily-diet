import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealStorageDTO } from "./MealStorageDTO";
import { MEALS_COLLECTION } from "@storage/storageConfig";

export async function mealsGetSections() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    let meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    const mealsByDate = meals.reduce((acc, meal) => {
      const date = meal.date;
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(meal);
      return acc;
    }, {} as Record<string, MealStorageDTO[]>);

    const mealSections = Object.keys(mealsByDate).map((date) => ({
      title: date,
      data: mealsByDate[date],
    }));

    return mealSections;
  } catch (error) {
    throw error;
  }
}
