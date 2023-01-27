// Manipulando arrays

let techs = ['html', 'css', 'js']

// adicionando um intem no fim

techs.push('php')

//colocando no começo

techs.unshift ('nodeJS')

//remover o item do final

// techs.pop ()

//remover do começo

// techs.shift()

//pegar somente alguns elementos do array
                         

                    //     esse 1 significa a posição que vai iniciar oque vai tirar
                    //        ja o 3 significa qual depois de iniciou quantos vai tirar     
//console.log (techs.slice(1, 3))



//remover 1 ou mais elementos em um array
//mesmo principio do outro

techs.splice(0, 0)

//encontrar a posição de um elemento no array

let index = techs.indexOf('css')
techs.splice(index, 1)

console.log (techs)