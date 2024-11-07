import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

type ScoreProps = {
  score: number;
  totalMeals: number;
};

export const Container = styled.TouchableOpacity<ScoreProps>`
  background-color: ${({ theme, score, totalMeals }) =>
    totalMeals === 0
      ? theme.COLORS.GRAY_6
      : score > 50
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
`;

export const ScoreTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONTS.BOLD};
    font-size: ${theme.FONT_SIZES.XXXL};
  `};
`;

export const ScoreText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONTS.REGULAR};
    font-size: ${theme.FONT_SIZES.MD};
  `};
`;

export const ArrowButton = styled.Pressable`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Icon = styled(ArrowUpRight).attrs<ScoreProps>(({ theme, score, totalMeals }) => ({
  size: 24,
  color: totalMeals === 0 ? theme.COLORS.GRAY_1 : (score > 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK),
}))``;
