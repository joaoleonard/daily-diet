import { Image } from "react-native";
import { Bold, Button, ButtonText, Container, Subtitle, Title } from "./styles";
import illustrationGood from "@assets/illustrationGood.png";
import illustrationBad from "@assets/illustrationBad.png";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function NewMealFeedback() {
  const route = useRoute();
  const navigation = useNavigation();

  const { isInDiet } = route.params as { isInDiet: boolean };

  function handleGoToHomePage() {
    navigation.navigate("Home");
  }

  return (
    <Container>
      <Title isInDiet={isInDiet}>
        {isInDiet ? "Continue assim!" : "Que pena!"}
      </Title>
      {isInDiet ? (
        <Subtitle>
          Você continua <Bold>dentro da dieta.</Bold> Muito bem!
        </Subtitle>
      ) : (
        <Subtitle>
          Você <Bold>saiu da dieta</Bold> dessa vez, mas continue se esforçando e não desista!
        </Subtitle>
      )}

      <Image source={isInDiet ? illustrationGood : illustrationBad} />
      <Button onPress={handleGoToHomePage}>
        <ButtonText>Ir para a página inicial</ButtonText>
      </Button>
    </Container>
  );
}
