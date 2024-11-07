import { TouchableOpacityProps, View } from "react-native";
import { ArrowButton, Container, Icon, ScoreTitle, ScoreText } from "./styles";
import { getMealsScore } from "@storage/meal/getMealsScore";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function Score({ ...rest }: TouchableOpacityProps) {
  const [score, setScore] = useState<number>(0);
  const [totalMeals, setTotalMeals] = useState<number>(0);

  useFocusEffect(
    useCallback(() => {
      async function fetchScore() {
        try {
          const score = await getMealsScore();
          console.log(score);
          setScore(score.mealsInDietPercent);
          setTotalMeals(score.totalMeals);
        } catch (error) {
          console.log(error);
        }
      }

      fetchScore();
    }, [])
  );

  return (
    <Container {...rest} score={score} totalMeals={totalMeals}>
      {totalMeals === 0 ? (
        <ScoreText>Nenhuma refeição cadastrada ainda</ScoreText>
      ) : (
        <View style={{alignItems: 'center'}}>
          <ScoreTitle>{score}%</ScoreTitle>
          <ScoreText>das refeições dentro da dieta</ScoreText>
        </View>
      )}
      <ArrowButton>
        <Icon score={score} totalMeals={totalMeals}/>
      </ArrowButton>
    </Container>
  );
}
