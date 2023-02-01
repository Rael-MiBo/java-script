// for
// break - para a execução do comando
// continue - continua do próximo


// for (let i =0; i <= 10; i++) {
//     if (i === 5){
//         continue;
//     }
//     if (i === 9){
//         break;
//     }

//     console.log (i)
// }

// while
// PORFAVOR NUNCA ESQUECER O =
// let i = 465498454651

// while (i > 50) {
//     console.log (i)

//     i /= 25
// }

// FOR... OF

// let nome = 'rafael'
// let nomes = ['rafael', 'juca', 'marcos', 'jonas']

// for (let caracteres of nome) {
//     console.log(caracteres)
// }

// for (let name of nomes) [
//     console.log(name)
// ]

// FOR ... IN

let person = {
    name: 'rafael',
    age: 17,
    peso: 70
}

for (let propiedade in person) {
    console.log (propiedade)
    console.log (person[propiedade])
}