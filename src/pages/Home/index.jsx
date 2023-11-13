import { Container, Content, Menu } from "./styles";
import { Header } from "../../components/Header";
import { FiPlus } from "react-icons/fi";
import { Card } from "../../components/Card";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container>
      <Header />

      <Menu>
        <h2>Meus Filmes</h2>
        <button type="button">
          <Link to="/new">
            <FiPlus /> Adicionar filme
          </Link>
        </button>
      </Menu>

      <Content>
        <Card />
        <Card />
        <Card />
      </Content>
    </Container>
  );
}
