import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...` 

    return (
        <div>
            <label>
                {props.label}
            </label>
            {/* Define se o campo é obrigatório, com base na propriedade `obrigatorio` passada via props */}
            <input required={props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    )
}

export default CampoTexto