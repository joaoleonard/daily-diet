import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

export const Avatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_1};
`;