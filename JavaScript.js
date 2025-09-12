function graus(valorfarenheit){
  return (5/9) * (valorfarenheit -32);



}


console.log(graus(40));




const peçaDecarro = [
  {
    Roda: 'Roda de liga leve',
    Porta: 'Porta de aço',
    Motor: 'Motor V8',
    Pneu: 'Pneu de alta performance'
  }
];

const novasPeças = peçaDecarro.map(peça => ({
  Roda: ` ${peça.Roda}(Nova)`,
  Porta: ` ${peça.Porta}(Nova)`,
  Motor: ` ${peça.Motor}(Nova)`,
  Pneu: ` ${peça.Pneu}(Nova)`
}));

console.log(novasPeças);
 
