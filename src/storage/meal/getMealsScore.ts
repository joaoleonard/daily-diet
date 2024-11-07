import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function getMealsScore() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    let meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    const totalMeals = meals.length;
    const totalMealsInDiet = meals.filter((meal) => meal.inDiet).length;
    const totalMealsOutOfDiet = totalMeals - totalMealsInDiet;

    let mealsInDietInARow = 0;
    let bestSequence = 0;

    meals.map((meal) => {
      if (meal.inDiet) {
        mealsInDietInARow++;
      } else {
        if (mealsInDietInARow > bestSequence) {
          bestSequence = mealsInDietInARow;
        }
        mealsInDietInARow = 0;
      }
    });

    const score = (totalMealsInDiet / totalMeals) * 100;

    return {
      mealsInDietPercent: parseFloat(score.toFixed(2)) || 0,
      totalMeals,
      totalMealsInDiet,
      totalMealsOutOfDiet,
      bestSequence,
    };
  } catch (error) {
    throw error;
  }
}
