function calcular (numero1, operadores, number2) {
    let resultado 
        switch (operadores) {
            case '+':
                resultado = numero1 + number2
                console.log (`o resultado da soma de ${numero1} com o ${number2} é ${resultado}`)
                break;
                
            case '-':
                    resultado = numero1 - number2
                    console.log (`o resultado da subtração de ${numero1} com o ${number2} é ${resultado}`)
                break;
                    
            case '*':
                    resultado = numero1 * number2
                    console.log (`o resultado da multiplicação de ${numero1} com o ${number2} é ${resultado}`)
                break;
                    
            case '/':
                    resultado = numero1 / number2
                    console.log (`o resultado da divisão de ${numero1} com o ${number2} é ${resultado}`)
                        
                break;
            
            case '**':
                resultado = numero1 ** number2
                console.log (`o resultado da ponteciação de ${numero1} com o ${number2} é ${resultado}`)
                break;
            
            default:
                console.log ('sinto muito esse operador ainda não está disponível')
                console.log ('apenas as operações que estão disponível são: soma(+), subtração(-), multiplicação(*), divisão(/) e potenciação(**)')
                break;
        }
    return resultado
}

calcular(10, '', 10)