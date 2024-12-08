import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`

    return (
        <div className="campo-texto">
            <label>
                {props.lavel}
            </label>
            <input placeholder={placeholderModificada}></input>
        </div>
    )
}

export default CampoTexto
