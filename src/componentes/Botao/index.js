import './Botao.css'

const Botao = (props) => { // Função do botão
        // Função chamada quando o botão é clicado
        return (<button className='botao'>
            
            {props.children} 
        </button>)
        // O {props.texto} será substituído por {props.children} <Tudo que estiver entre a abertura e fechamento do componente <botao> vai ser passado pela propriedade children>
}

export default Botao