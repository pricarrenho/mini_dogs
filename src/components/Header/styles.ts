import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 16px;
  `};
`;
