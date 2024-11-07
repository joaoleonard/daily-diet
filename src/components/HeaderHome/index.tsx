import { Avatar, Container } from "./styles";
import { Image } from "react-native";
import Logo from "@assets/Logo.png";
import PROFILE from "@assets/PROFILE.jpg";

export default function HeaderHome() {
  return (
    <Container>
      <Image source={Logo} />
      <Avatar source={PROFILE} />
    </Container>
  );
}
