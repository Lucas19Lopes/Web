/*const Aluno = (props) => {
    return (
        <div>
            <h1>Nome: {props.nome}</h1>
            <h1>Curso: {props.curso}</h1>
            <h1>Universidade: {props.universidade}</h1>
        </div>

    )


}*/
const Aluno = ({nome, curso, universidade }) => {
    return (
        <div>
            <h1>Nome: {nome}</h1>
            <h1>Curso: {curso}</h1>
            <h1>universidade: {universidade}</h1>
        </div>
    )
}


export default Aluno