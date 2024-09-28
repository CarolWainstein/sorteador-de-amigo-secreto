import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../state/hooks/useAdicionarParticipante"
import { useMensagemDeErro } from "../state/hooks/useMensagemDeErro"
import "./Formulario.css"

const Formulario = () => {

    const [nome, setNome] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarNaLista = useAdicionarParticipante()

    const mensagemDeErro = useMensagemDeErro()

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()
    }

    return (
        <form onSubmit={adicionarParticipante} className="form-container">
            <FontAwesomeIcon icon={faUserPlus} flip="horizontal" className="icone-usuario-plus" />
            <input 
                ref={inputRef}
                type="text" 
                value={nome}
                onChange={evento => setNome(evento.target.value)}
                placeholder="Insira os nomes dos participantes" 
            />
            <button className="botao-adicionar" disabled={!nome}>Adicionar</button>
            {mensagemDeErro && <p className="alerta erro" role="alert">{mensagemDeErro}</p>}
        </form>
    )
}

export default Formulario