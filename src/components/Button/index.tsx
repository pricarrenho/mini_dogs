import { ButtonProps } from "./types";
import * as S from "./styles";

export const Button = ({ children, styleType }: ButtonProps) => {
  return <S.Wrapper $styleType={styleType}>{children}</S.Wrapper>;
};
