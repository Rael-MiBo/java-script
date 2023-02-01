function pegarNota (nota)   {
    let A = nota >= 90 && nota <= 100
    let B = nota >= 80 && nota <= 89
    let C = nota >= 70 && nota <= 79
    let D = nota >= 60 && nota <= 69
    let F = nota <= 59 && nota >= 0
    
    let notafinal;
    
    
    if (A) {
    
        notafinal = 'A'
    
    }
    
     else if (B) {
    
        notafinal = 'B'
    
    }
    
    else if (C) {
    
        notafinal = 'C'
    
    }
    
    else if (D) {
    
        notafinal = 'D'
    
    }
    
    else if (F) {
    
        notafinal = 'F'
    
    } else {
    
        notafinal = 'Nota inválida, insira um valor entre 0 e 100'
    
    }
    
    return notafinal

}

console.log (pegarNota(20))
console.log (pegarNota(100))
console.log (pegarNota(100))
console.log (pegarNota(90))
console.log (pegarNota(90))
console.log (pegarNota(80))
console.log (pegarNota(20))
console.log (pegarNota(70))
console.log (pegarNota(60))
console.log (pegarNota(40))
console.log (pegarNota(10))
console.log (pegarNota(80))
console.log (pegarNota(-10))
console.log (pegarNota(110))