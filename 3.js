// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora de todos os dias de um ano, faça um programa, na linguagem que desejar, que calcule e retorne: 

// - O menor valor de faturamento ocorrido em um dia do ano; 
// - O maior valor de faturamento ocorrido em um dia do ano; 
// - Número de dias no ano em que o valor de faturamento diário foi superior à média anual. 

// a) Considerar o vetor já carregado com as informações de valor de faturamento. 

// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média. 

// c) Utilize o algoritmo mais veloz que puder definir. 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* 
    Vou levar em consideração que é um vetor contendo objetos com as seguintes propriedades: faturamento, diaDaSemana, isFeriado
    faturamento: ponto flutuante
    diaDaSemana: Date
    isFeriado: booleano
*/

const isFeriadoOuFimDeSemana = (diaDaSemana, isFeriado) => {
    return isFeriado || diaDaSemana.getDay() === 0 || diaDaSemana.getDay() === 6
}

const calcularMediaDoFaturamento = (faturamento) => {
    const somaDoFaturamento = faturamento
      .filter((dia) => !isFeriadoOuFimDeSemana(dia.diaDaSemana, dia.isFeriado))
      .reduce((total, dia) => total + dia.faturamento, 0)

    return somaDoFaturamento / faturamento.length
}

const menorFaturamentoDoAno = (faturamento) => {
    let result
    for (const dia of faturamento) {
        if (isFeriadoOuFimDeSemana(dia.diaDaSemana, dia.isFeriado)) {
            continue
        }

        if (!result || result.faturamento > dia.faturamento) {
            result = dia
        }
    }
    return result
}

const maiorFaturamentoDoAno = (faturamento) => {
    let result
    for (const dia of faturamento) {
        if (!result || result.faturamento < dia.faturamento) {
            result = dia
        }
    }
    return result
}

const calcularDiasAcimaDaMedia = (faturamento) => {
    let result = 0
    const mediaDeFaturamentoAnual = calcularMediaDoFaturamento(faturamento)

    for (const dia of faturamento) {
        if (dia.faturamento > mediaDeFaturamentoAnual) {
            result++
        }
    }
    return result
}
