// 5) Dois veículos, um carro e um caminhão, saem respectivamente de cidades opostas pela mesma rodovia. O carro, de Ribeirão Preto em direção a Barretos, a uma velocidade constante de 90 km/h, e o caminhão, de Barretos em direção a Ribeirão Preto, a uma velocidade constante de 80 km/h. Quando eles se cruzarem no percurso, qual estará mais próximo da cidade de Ribeirão Preto?

// a) Considerar a distância de 125km entre a cidade de Ribeirão Preto <-> Barretos.
// b) Considerar 3 pedágios como obstáculo e que o carro leva 5 minutos a mais para passar em cada um deles, pois ele não possui dispositivo de cobrança de pedágio.
// c)Explique como chegou no resultado.

const quilometrosPorSegundosParaMetros = quilometrosPorSegundo => {
    return quilometrosPorSegundo / 3.6
}

const quemChegaPrimeiro = () => {
    const distanciaEntreCidades = 125 // km
    const velocidadeDoCarro = 90 // km/h
    const velocidadeDoCaminhao = 80 // km/h
    let tempoRestanteNoPedagio = 3 * 300 // tempo em segundos
    let metrosPercorridosPeloCarro = 0
    let metrosPercorridosPeloCaminhao = 0
    let segundos = 0

    while (
        metrosPercorridosPeloCaminhao + metrosPercorridosPeloCarro <
        distanciaEntreCidades * 1000
    ) {
        segundos++
        if (tempoRestanteNoPedagio) {
            tempoRestanteNoPedagio--
        } else {
            metrosPercorridosPeloCarro +=
                quilometrosPorSegundosParaMetros(velocidadeDoCarro)
        }
        metrosPercorridosPeloCaminhao +=
            quilometrosPorSegundosParaMetros(velocidadeDoCaminhao)
    }

    if (metrosPercorridosPeloCarro < metrosPercorridosPeloCaminhao) {
        console.log('O carro está mais próximo de Ribeirão Preto')
    } else {
        console.log('O caminhão está mais próximo de Ribeirão Preto')
    }
    
    console.log(
        `O tempo até o caminhão e o carro cruzarem foi de ${parseInt(
            segundos / 60
        )} minutos e ${segundos % 60} segundos`
    )
    console.log(
        `O caminhão percorreu ${(metrosPercorridosPeloCaminhao / 1000).toFixed(
            2
        )} km`
    )
    console.log(
        `O carro percorreu ${(metrosPercorridosPeloCarro / 1000).toFixed(2)} km`
    )
}
quemChegaPrimeiro()

/* Cheguei no resultado somando quantos metros por segundo o carro e o caminhão faziam enquanto a soma deles
   fossem menor que a distância total entre as cidades. O carro só começou a locomover após 900 segundos,
   referente a passagem por 3 pedágios de 5 minutos cada.
*/