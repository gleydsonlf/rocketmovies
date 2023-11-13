import { Background, Container, Form } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assitir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="Email" type="Text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar" />

        {/* <a href="#"> Criar Conta</a> */}
        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
