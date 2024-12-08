import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...` 

    return (
        <div>
            <label>
                {props.label}
            </label>
            <input placeholder={placeholderModificada}></input>
        </div>
    )
}

export default CampoTexto