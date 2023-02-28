import { Button } from "../Button";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Wrapper>
      <h1>Mini Dogs</h1>
      <Button styleType="secondary"></Button>
    </S.Wrapper>
  );
};
