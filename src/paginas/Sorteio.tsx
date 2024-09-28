// src/paginas/Sorteio.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faDiceFive } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio"
import "./Sorteio.css"
import Card from "../componentes/Card"

const Sorteio = () => {

    const participantes = useListaDeParticipantes()

    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoScreto, setAmigoSecreto] = useState('')

    const resultado = useResultadoSorteio()

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        }
    }

    return (<>
        <Card>
            <section className="sorteio">
                <h2>Quem vai tirar o papelzinho?</h2>
                <form onSubmit={sortear} className="sorteio-form">
                    <div className="div-selecionar">
                        <select
                            className="selecionar-seu-nome"
                            required
                            name="participanteDavez"
                            id="participanteDavez"
                            placeholder="Selecione o seu nome"
                            value={participanteDaVez}
                            onChange={evento => setParticipanteDaVez(evento.target.value)}
                        >
                            <option>Selecione seu nome</option>
                            {participantes.map(participante => <option key={participante}>{participante}</option>)}
                        </select>
                        <FontAwesomeIcon icon={faCaretDown} className="select-arrow" />
                    </div>
                    <p className="paragrafo-sorteio">Clique em em sortear para ver quem é seu amigo secreto!</p>
                    <button className="botao-sortear"><FontAwesomeIcon icon={faDiceFive} style={{ marginRight: '8px' }} /> Sortear</button>
                </form>

                {amigoScreto && <p className="resultado" role="alert">{amigoScreto}</p>}

                <footer className="sorteio">
                    <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
                </footer>
            </section>
        </Card>
    </>)
}

export default Sorteio