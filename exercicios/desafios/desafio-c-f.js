function celsiusF (graus) {
    const celsiusExistance = graus.toUpperCase().includes("C")
    const fahrenheitExistance = graus.toUpperCase().includes("F")

    if (!celsiusExistance &&!fahrenheitExistance) {
        throw new Error("error, graus inexistente")

    }
    
    let novocelsius = Number(graus.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9 
    let novosinal = 'C'

    if (celsiusExistance) {
        novocelsius = Number(graus.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32

        novosinal = 'F'
    }

    return formula(novocelsius).toFixed(1) + novosinal

}
try {
    console.log (celsiusF("34C"))
} catch (error) {
    console.log(error.message)
}