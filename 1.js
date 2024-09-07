// 1) Observe o trecho de código:   

// int INDICE = 12, SOMA = 0, K = 1;  

// enquanto K < INDICE faça  

// { K = K + 1;  SOMA = SOMA + K;}  

// imprimir(SOMA);  
 

// Ao final do processamento, qual será o valor da variável SOMA?

const indice = 12
let soma = 0
let k = 1
const resultados = []

while (k < indice) {
    k++
    soma = soma + k
    resultados.push(soma)
}

console.log(`O último valor da variável SOMA é: ${resultados.at(-1)}`)


// O VALOR FINAL É 77