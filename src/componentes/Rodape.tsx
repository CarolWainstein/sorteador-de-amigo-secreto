import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import { useSorteador } from "../state/hooks/useSorteador";
import "./Rodape.css";

export const Rodape = () => {
  const participantes = useListaDeParticipantes();

  const navegarPara = useNavigate();

  const sortear = useSorteador();

  const iniciar = () => {
    sortear();
    navegarPara("/sorteio");
  };

  return (
    <footer className="rodape">
      <div className="div-botao">
        <button className="botao" disabled={participantes.length < 3} onClick={iniciar}> 
          <FontAwesomeIcon icon={faCirclePlay} style={{ marginRight: '8px' }} className="icone-iniciar" />
          Iniciar brincadeira
        </button>
      </div>
        <img 
          className="imagem-sacolas"
          src="/imagens/sacolas.png"
          alt="imagens de sacolas"
        />
    </footer>
  );
};
