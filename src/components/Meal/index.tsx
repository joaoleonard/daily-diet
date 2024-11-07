import { TouchableOpacityProps } from "react-native";
import { Container, Divisor, LeftSide, MealHour, MealName, Status } from "./styles";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";

type ListItemProps = TouchableOpacityProps & {
  time: string;
  name: string;
  inDiet: boolean;
};

export default function Meal({ time, name, inDiet, ...rest }: ListItemProps) {
  return (
    <Container {...rest}>
      <LeftSide>
        <MealHour>{time}</MealHour>
        <Divisor />
        <MealName>{name}</MealName>
      </LeftSide>
      <Status inDiet={inDiet} />
    </Container>
  );
}
