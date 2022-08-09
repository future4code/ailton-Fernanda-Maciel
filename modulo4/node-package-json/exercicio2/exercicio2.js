const operacao = process.argv[2];
switch (operacao) {
  case "soma":
    const add = Number(process.argv[3]) + Number(process.argv[4]);
    console.log(`o resultado da soma é ${add}`);
    break;
  case "sub":
    const sub = Number(process.argv[3]) - Number(process.argv[4]);
    console.log(`o resultado da sub é ${sub}`);
}
