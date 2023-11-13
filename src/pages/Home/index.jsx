import { Container, Content, Menu } from "./styles";
import { Header } from "../../components/Header";
import { FiPlus } from "react-icons/fi";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <Container>
      <Header />

      <Menu>
        <h2>Meus Filmes</h2>
        <button type="button" className="btn">
          <FiPlus /> Adicionar filme
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
