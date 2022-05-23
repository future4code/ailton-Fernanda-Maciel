// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03

function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04

function retornaNumerosPares(array) {
  return array.filter((num) => num % 2 === 0);
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  return retornaNumerosPares(array).map((numero) => numero * numero);
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = 0;

  for (let numero of array) {
    if (maiorNumero < numero) {
      maiorNumero = numero;
    }
  }

  return maiorNumero;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero = num1;
  let menorNumero = num2;

  /**
   * exemplo 01:
   * num1 = 2
   * num2 = 3
   *
   * examplo 02
   * num1 = 5
   * num2 = 2
   */
  if (num1 < num2) {
    maiorNumero = num2;
    menorNumero = num1;
  }

  return {
    maiorNumero,
    maiorDivisivelPorMenor: maiorNumero % menorNumero === 0,
    diferenca: maiorNumero - menorNumero,
  };
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const retorno = [];
  for (let i = 0; i < n; i++) {
    retorno.push(i * 2);
  }

  return retorno;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC && ladoC === ladoA) {
    return "Equilátero";
  }

  if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
    return "Isósceles";
  }

  return "Escaleno";
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const arrayOrdenado = retornaArrayOrdenado(array);
  return [arrayOrdenado[array.length - 2], arrayOrdenado[1]];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${
    filme.ano
  }, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  return {
    ...pessoa,
    nome: "ANÔNIMO",
  };
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  return pessoas.filter(
    (pessoa) => pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60
  );
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  return pessoas.filter(
    (pessoa) => pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60
  );
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  return contas.map((conta) => {
    let totalCompras = 0;
    for (let compra of conta.compras) {
      totalCompras = totalCompras + compra;
    }

    return {
      cliente: conta.cliente,
      saldoTotal: conta.saldoTotal - totalCompras,
      compras: [],
    };
  });
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
