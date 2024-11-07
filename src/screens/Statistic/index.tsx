import { ArrowLeft } from "phosphor-react-native";
import {
  ColoredCard,
  Container,
  Content,
  GrayCard,
  CardLabel,
  CardValue,
  Header,
  HeaderSubtitle,
  HeaderTitle,
  Title,
  TwoCardsContainer,
  HeaderBackButton,
  HeaderBackButtonIcon,
} from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { getMealsScore } from "@storage/meal/getMealsScore";

export default function Statistic() {
  const navigation = useNavigation();
  const [score, setScore] = useState<number>(0);
  const [totalMeals, setTotalMeals] = useState<number>(0);
  const [mealsInDiet, setMealsInDiet] = useState<number>(0);
  const [mealsOutDiet, setMealsOutDiet] = useState<number>(0);
  const [mealsInDietInARow, setMealsInDietInARow] = useState<number>(0);

  function handleGoBack() {
    navigation.navigate("Home");
  }

  useFocusEffect(
    useCallback(() => {
      async function fetchScore() {
        try {
          const score = await getMealsScore();
          setScore(score.mealsInDietPercent);
          setTotalMeals(score.totalMeals);
          setMealsInDiet(score.totalMealsInDiet);
          setMealsOutDiet(score.totalMealsOutOfDiet);
          setMealsInDietInARow(score.bestSequence);
        } catch (error) {
          console.log(error);
        }
      }

      fetchScore();
    }, [])
  );

  return (
    <Container goodHealth={score > 50}>
      <Header goodHealth={score > 50}>
        <HeaderBackButton onPress={handleGoBack}>
          <HeaderBackButtonIcon goodHealth={score > 50} />
        </HeaderBackButton>
        <HeaderTitle>{score}%</HeaderTitle>
        <HeaderSubtitle>das refeições dentro da dieta</HeaderSubtitle>
      </Header>
      <Content>
        <Title>Estatísticas gerais</Title>
        <GrayCard>
          <CardValue>{mealsInDietInARow}</CardValue>
          <CardLabel>melhor sequência de pratos dentro da dieta</CardLabel>
        </GrayCard>
        <GrayCard>
          <CardValue>{totalMeals}</CardValue>
          <CardLabel>refeições registradas</CardLabel>
        </GrayCard>

        <TwoCardsContainer>
          <ColoredCard green>
            <CardValue>{mealsInDiet}</CardValue>
            <CardLabel>refeições dentro da dieta</CardLabel>
          </ColoredCard>
          <ColoredCard>
            <CardValue>{mealsOutDiet}</CardValue>
            <CardLabel>refeições fora da dieta</CardLabel>
          </ColoredCard>
        </TwoCardsContainer>
      </Content>
    </Container>
  );
}
