function comparaDoisNumeros(num1, num2) {
    var maiorNumero;
    var menorNumero;
    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    }
    else {
        maiorNumero = num2;
        menorNumero = num1;
    }
    var diferenca = maiorNumero - menorNumero;
    return diferenca;
}
console.log(comparaDoisNumeros(500, 358));
