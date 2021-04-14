let casos = 3
let alunos = ["Fernanda", "Fernando", "Gustavo"]
let numeros = [7, 9, 11]
let n = 0
console.log(alunos)
console.log(numeros)
console.log(numeros.length)
do {
  
    if (numeros[n] % 2 == 0) {
        alunos.reverse()
        numeros.sort(function(a,b) { return b - a})
    }

    let indiceRemovido = numeros[n] % numeros.length
    
    alunos.splice(n)
    numeros.splice(n)

    if (n == numeros.length) {
        n = 0
    } else {
        n = numeros[n]
    }

    
    
} while (numeros.length > 1)
console.log(numeros.length)
console.log(alunos[0])
console.log(numeros[0])
