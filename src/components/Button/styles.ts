import styled, { css, DefaultTheme } from "styled-components";
import { ButtonStyleType } from "./types";

type WrapperProps = {
  $styleType: ButtonStyleType;
};

const WrapperModifier = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.black};
  `,

  secondary: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.black};
    background: ${theme.colors.white};
    width: 2px;
    height: 4px;
    padding: 4px;
    border-radius: 50%;
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ $styleType, theme }) => css`
    color: ${theme.colors.white};
    padding: 8px 32px;
    border-radius: 4px;

    ${$styleType && WrapperModifier[$styleType](theme)};
  `};
`;
