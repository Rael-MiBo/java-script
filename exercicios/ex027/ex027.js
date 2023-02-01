//thorw

function sayMyName(name = '') {
    if (name === '') {

        throw 'Coloque um nome!'

    } else {
        console.log (`Seja Bem-Vindo(a) ${name}`)
    }
    
}

try {
    sayMyName('vai tomar no cu piranha')
} catch (cu) {
    console.log(cu)
}