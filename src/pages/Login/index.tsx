import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { fetchToken, loginTokenSelector } from "../../store/login/reduce";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(fetchToken({ username, password }));
  };

  const token = useSelector(loginTokenSelector);

  useEffect(() => {
    if (token) navigate("/home");
  }, [token]);

  return (
    <Container>
      <Header />

      <form onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          name="username"
          type="text"
          value={username}
          onChange={setUsername}
        />
        <Input
          label="Senha"
          name="senha"
          type="text"
          value={password}
          onChange={setPassword}
        />

        <Button styleType="primary" type="submit">
          Entrar
        </Button>
      </form>
    </Container>
  );
};
