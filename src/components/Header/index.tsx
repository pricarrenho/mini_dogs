import { Button } from "../Button";
import { Container } from "../Container";
import * as S from "./styles";

export const Header = () => {
  return (
    <Container>
      <S.Wrapper>
        <h1>Mini Dogs</h1>
        <Button styleType="secondary"></Button>
      </S.Wrapper>
    </Container>
  );
};
