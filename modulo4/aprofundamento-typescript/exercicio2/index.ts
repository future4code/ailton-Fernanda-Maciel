//Observe a função a seguir, escrita em JavaScript:

//a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros.

// c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

// type amostraDeIdades = {

//     numeros :number = [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: (numero) => {...}
// }

// function obterEstatisticas(numeros) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }
