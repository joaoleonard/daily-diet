import CommonHeader from "@components/CommomHeader";
import {
  Container,
  Content,
  DateAndHour,
  DateAndHourTitle,
  Description,
  InDietContainer,
  InDietStatus,
  InDietText,
  Template,
  Title,
} from "./styles";
import LargeButton from "@components/LargeButton";
import LargeOutlineButton from "@components/LargeOutlineButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { mealFindById } from "@storage/meal/mealFindById";
import { mealDeleteById } from "@storage/meal/mealDeleteById";

export default function Meal() {
  const route = useRoute();
  const navigation = useNavigation();

  const [meal, setMeal] = useState<MealStorageDTO>();

  const { mealId } = route.params as { mealId: number };

  function handleEditMeal() {
    navigation.navigate("CreateEditMeal", { mealId });
  }

  async function handleDeleteMeal() {
    try {
      await mealDeleteById(mealId);
    } catch (error) {
      console.log(error);
    } finally {
      navigation.navigate("Home");
    }
  }

  async function fetchMeal() {
    try {
      const meal = await mealFindById(mealId);
      setMeal(meal);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <Container>
      <CommonHeader title="Refeição" />
      <Content>
        <Template>
          <Title>{meal?.name}</Title>
          <Description>{meal?.description}</Description>

          <DateAndHourTitle>Data e Hora</DateAndHourTitle>
          <DateAndHour>
            {meal?.date} às {meal?.time}
          </DateAndHour>

          <InDietContainer>
            <InDietStatus inDiet={!!meal?.inDiet} />
            <InDietText>dentro da dieta</InDietText>
          </InDietContainer>
        </Template>

        <Template>
          <LargeButton buttonText="Editar refeição" onPress={handleEditMeal} />
          <LargeOutlineButton
            buttonText="Excluir refeição"
            onPress={handleDeleteMeal}
          />
        </Template>
      </Content>
    </Container>
  );
}
