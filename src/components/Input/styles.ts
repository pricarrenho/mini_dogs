import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
    font-weight: 500;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    min-height: 40px;
    width: 100%;
    border: 2px solid;
    border-radius: 4px;
    padding-right: 16px;
    padding-left: 16px;
    font-size: ${theme.font.sizes.sm};
    margin-bottom: 16px;
    box-sizing: border-box;
  `}
`;
