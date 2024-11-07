import { MealStorageDTO } from "@storage/meal/MealStorageDTO";

export function orderMealsByDate(meals: MealStorageDTO[]) {
  return meals.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
