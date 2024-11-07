import styled, { css } from "styled-components/native";
import { ForkKnife } from "phosphor-react-native";	

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.BOLD};
    font-size: ${theme.FONT_SIZES.XL};
    color: ${theme.COLORS.GRAY_2};
    text-align: center;
  `}
`;

export const Icon = styled(ForkKnife).attrs(({ theme }) => ({
  size: 48,
  color: theme.COLORS.GRAY_2,
}))``;


