const FuncoesInternas = () => {
    
    let num1 = 10
    let num2 = 5

    function somar(x, y){
        return x + y 
    }

    function subtrair(x, y){
        return x - y 
    }
    function mutipliccar(x, y){
        return x * y 
    } 
    function dividir(x, y){
        return x / y 
    }
    
    
    return (
        <div>
            <h1> Calculadora </h1>
            <h3>O resultado da soma é: {somar(num1, num2)}</h3>
            <h3> A subtração é :{subtrair(num1, num2)}</h3> 
            <h3>mutiplicação é: {mutipliccar(num1, num2)} </h3>
            <h3>divisão é :{dividir(num1, num2)}</h3>
           
        </div>
    )

}

export default FuncoesInternas