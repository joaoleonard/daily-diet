import Score from "@components/Score";
import HeaderHome from "@components/HeaderHome";
import LargeButton from "@components/LargeButton";
import Meal from "@components/Meal";

import { Container, SmallRegularText, SectionHeaderText } from "./styles";
import { SectionList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import EmptyMealList from "@components/EmptyMealList";
import { MealDailyListStorageDTO } from "@storage/meal/MealDailyListStorageDTO";
import { mealsGetSections } from "@storage/meal/mealsGetSections";

export default function Home() {
  const navigation = useNavigation();
  const [meals, setMeals] = useState<MealDailyListStorageDTO[]>([]);

  async function handleNewMeal() {
    navigation.navigate("CreateEditMeal", {});
  }

  function handleOpenStatistics() {
    navigation.navigate("Statistics");
  }

  function handleOpenMealInfos(mealId: number) {
    navigation.navigate("Meal", { mealId: mealId });
  }

  async function fetchMeals() {
    try {
      const meals = await mealsGetSections();
      setMeals(meals);
      console.log(meals[0].data)
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <HeaderHome />
      <Score onPress={handleOpenStatistics} />
      <SmallRegularText>Refeições</SmallRegularText>
      <LargeButton
        showPlusIcon
        buttonText="Nova refeição"
        onPress={handleNewMeal}
      />
      <SectionList
        sections={meals}
        renderItem={({ item }) => (
          <Meal
            time={item.time}
            name={item.name}
            inDiet={item.inDiet}
            onPress={() => handleOpenMealInfos(item.id)}
          />
        )}
        keyExtractor={(item) => item.name}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeaderText>{title}</SectionHeaderText>
        )}
        contentContainerStyle={meals.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <EmptyMealList />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
