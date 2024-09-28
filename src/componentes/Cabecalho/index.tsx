import "./Cabecalho.css";

const Cabecalho = () => {
    return (
        <header className="cabecalho">
            <img 
                className="imagem-logo"
                src="/imagens/logo.png"
                alt='Logo do Sorteador'
            />
            <img 
                className="imagem-logo-pequeno"
                src="/imagens/logo-pequeno.png"
                alt='Logo do Sorteador'
            />
            <img 
                className="participante"
                src="/imagens/participante.png" 
                alt="Participante com um presente na mão"
            />
        </header>
    );
};

export default Cabecalho;