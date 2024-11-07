import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView, ScrollView, TextInput } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
  width: 100%;
`;

export const Container = styled(KeyboardAvoidingView).attrs({
  behavior: "padding",
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
  width: 100%;
`;

export const Form = styled(ScrollView).attrs({
  keyboardShouldPersistTaps: "handled",
})`
  flex: 1;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  margin-top: -20px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 30px 25px;
`;

export const FormInput = styled.View`
  margin-bottom: 20px;
  flex-direction: column;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONTS.BOLD};
    font-size: ${theme.FONT_SIZES.MD};
    margin-bottom: 5px;
  `}
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    border-radius: 6px;
    border: 1px solid ${theme.COLORS.GRAY_5};
    padding: 10px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONTS.REGULAR};
    font-size: ${theme.FONT_SIZES.LG};
    padding: 15px;
    min-width: 47%;
  `}
`;

export const Textarea = styled(TextInput).attrs({
  multiline: true,
  numberOfLines: 3,
})`
  ${({ theme }) => css`
    border-radius: 6px;
    border: 1px solid ${theme.COLORS.GRAY_5};
    padding: 10px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONTS.REGULAR};
    font-size: ${theme.FONT_SIZES.LG};
    padding: 18px;
    min-height: 120px;
  `}
`;

export const DateAndHour = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

export const ToggleButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
