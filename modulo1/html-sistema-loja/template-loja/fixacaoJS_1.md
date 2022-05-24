```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const salario = 2000;
  const bonusTotalCarros = 100 * qtdeCarrosVendidos;
  const valorBonusPercentCarros = (valorTotalVendas * 5) / 100;

  return salario + bonusTotalCarros + valorBonusPercentCarros;
}
```
