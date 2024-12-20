import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão',
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()  // previne o comportamento padrão
        console.log('Form foi submetido')
    }

    return (
    <section className='formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            {/* atribui obrigatoriedade no preenchimento do form */}
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/> 
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
            <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço de uma imagem"/>
            <ListaSuspensa label="Time" itens={times}/>
            <Botao> 
                Criar Card
            </Botao>
        </form>
    </section>)
}

export default Formulario 

