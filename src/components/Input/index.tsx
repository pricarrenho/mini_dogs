import { InputProps } from "./types";
import * as S from "./styles";

export const Input = ({ name, type, label, value }: InputProps) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name} dangerouslySetInnerHTML={{ __html: label }} />
      <S.Input value={value} id={name} name={name} type={type} />
    </S.Wrapper>
  );
};
