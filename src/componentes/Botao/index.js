import './Botao.css'

const Botao = (props) => { // Função do botão
        // Função chamada quando o botão é clicado

        return (<button>
            {props.texto}
        </button>)
}

export default Botao