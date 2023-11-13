/* eslint-disable react/prop-types */
import { Container } from "./styles";
import stars from "../../assets/stars.png";
import { Tag } from "../../components/Tags";

export function Card() {
  return (
    <Container>
      <h2>Interestelar</h2>
      <img src={stars} alt="" />
      <p>
        Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em
        futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família.
        Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um
        fantasma que tenta se comunicar com ela...
      </p>
      <Tag title="Ficção Científica" />
      <Tag title="Drama" />
      <Tag title="Família" />
    </Container>
  );
}
