export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            Statistics: undefined;
            CreateEditMeal: {
                mealId?: number;
            };
            Meal: {
                mealId: number;
            };
            NewMealFeedback: {
                isInDiet: boolean;
            };
        }
    }
}