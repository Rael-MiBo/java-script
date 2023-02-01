let familia = {
    receita: [300, 0, 300,800, 800, 1000, 1900],
    despesas: [600, 1000, 500, 200, 150, 80]
}

function somar (array) {
    let total = 0;

    for (let aSoma of array) {
        total += aSoma
    }

    return total
}

function calcular () {
    const ganhos = somar(familia.receita)
    const perdas = somar(familia.despesas)

    const total = ganhos - perdas
    
    const ok = total >=0

    let mensagem = 'negativo'

    if (ok) {
        mensagem = 'positivo'
    }

    console.log (`O seu saldo é ${mensagem} e o valor é R$${total}`)
}

calcular()
