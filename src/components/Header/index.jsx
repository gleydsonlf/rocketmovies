import { Container, Profile, Logout, Brand, Search } from "./styles";
import { RiSearchLine } from "react-icons/ri";
import { Input } from "../../components/Input";

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={RiSearchLine} />
      </Search>

      <Profile to="/profile">
        {/* Para aparecer a foto do usuário do githhub */}
        <div>
          <strong>Gleydson Lucas</strong>

          <span>
            <Logout>Sair</Logout>
          </span>
        </div>
        <img src="https://github.com/gleydsonlf.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
