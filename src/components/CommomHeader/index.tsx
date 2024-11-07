import { useNavigation } from "@react-navigation/native";
import { Container, BackButton, Icon, Title } from "./styles";

export default function CommonHeader({ title = "" }) {
    const navigation = useNavigation();

    function backToHome() {
        navigation.goBack();
    }

  return (
    <Container>
      <BackButton onPress={backToHome}>
        <Icon />
      </BackButton>
      <Title>{title}</Title>
    </Container>
  );
}
