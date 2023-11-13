import { Container, Links, Content } from "./styles";

import { Tag } from "../../components/Tags";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
// import { Links } from "../../components/Section/styles";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, ducimus consequuntur et
            laboriosam cum vero obcaecati tempore culpa similique non repudiandae a dolor voluptate
            velit, quasi pariatur praesentium, nemo doloremque! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Repellat aut id facilis sed, quas voluptas, delectus
            architecto veniam eius iure doloremque tempora totam quaerat et est rerum. Provident,
            sequi nulla.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
          {/* <Button title="Entrar" loading />
          <Button title="Cadastrar" /> */}
        </Content>
      </main>
    </Container>
  );
}

export default Details;
