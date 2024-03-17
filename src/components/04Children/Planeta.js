const Planeta = ({nome, tipo, pos, imagem, galaxia}) => {
    
    return (
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Tipo: {tipo}</h3>
            <h3>Posiçao: {pos}</h3>
            <h3>Galáxia: {galaxia}</h3>
        </div>
    )
}

export default Planeta