import { Background, Container, Form } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assitir.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="Text" icon={FiUser} />
        <Input placeholder="Email" type="Text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Cadastrar" />

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  );
}
