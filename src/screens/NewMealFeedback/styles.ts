import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
  isInDiet: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text<Props>`
  ${({ theme, isInDiet }) => css`
    font-size: ${theme.FONT_SIZES.XXL};
    font-family: ${theme.FONTS.BOLD};
    color: ${isInDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    margin-bottom: 16px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.LG};
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.GRAY_1};
    text-align: center;
    max-width: 90%;
    margin-bottom: 24px;
  `}
`;

export const Bold = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.BOLD};
  `}
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_2};
    padding: 16px 32px;
    border-radius: 8px;
    margin-top: 32px;
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.LG};
    font-family: ${theme.FONTS.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;
