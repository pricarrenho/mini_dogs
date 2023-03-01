import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  `}
`;

export const Li = styled.li`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 62px 1fr auto;
    align-items: center;
    background: ${theme.colors.gray100};
    border-radius: 4px;

    img {
      max-width: 100%;
      border-radius: 4px;
    }

    h2 {
      margin-left: 16px;
      font-size: ${theme.font.sizes.md};
      color: ${theme.colors.gray300};
    }

    span {
      margin-right: 16px;
      font-size: ${theme.font.sizes.sm};
      color: ${theme.colors.gray200};
    }
  `}
`;
