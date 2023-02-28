import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

export const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <Container>
      <Header />

      <Input label="Usuário" name="usuario" type="text" />
      <Input label="Senha" name="senha" type="text" />

      <Button styleType="primary" onClick={handleClick}>
        Entrar
      </Button>
    </Container>
  );
};
