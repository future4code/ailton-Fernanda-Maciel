```javaScript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
let contador = 0

  for (let numero of arrayDeNumeros){
    if(numero === numeroEscolhido){
      contador = contador + 1
    }
  }

  if(contador === 0) {
    return "Número não encontrado"
  }

  return `O número ${numeroEscolhido} aparece ${contador}x`
}
```
