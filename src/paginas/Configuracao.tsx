import Card from "../componentes/Card";
import Formulario from "../componentes/Formulario";
import { ListaParticipantes } from "../componentes/ListaParticipantes";
import { Rodape } from "../componentes/Rodape";

export const Configuracao = () => {
  return (
    <Card>
      <h2>Vamos Começar!</h2>
      <Formulario />
      <ListaParticipantes />
      <Rodape />
    </Card>
  );
};
