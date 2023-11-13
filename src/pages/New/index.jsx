import { Container, Form, NewInput, RowForm } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/Noteitem";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/" className="voltar">
              <FiArrowLeft /> Voltar
            </Link>
            <h2>Novo Filme</h2>
          </header>

          <RowForm>
            <NewInput>
              <Input placeholder="Título" />
            </NewInput>
            <NewInput>
              <Input placeholder="Sua Nota (de 0 a 5)" />
            </NewInput>
          </RowForm>
          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <RowForm className="marcadores">
              <NoteItem value="React" />
              <NoteItem placeholder="Novo link" isNew />
            </RowForm>
          </Section>

          <RowForm>
            <Button title="Excluir Filmes" className="excluir" />
            <Button title="Salvar" />
          </RowForm>
        </Form>
      </main>
    </Container>
  );
}
