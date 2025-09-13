
// Variaveis de escopo de bloco 
let x = 0 //( vairiavel dinamicamente tipada de leitura e escrita (escrita dinamica)) 
const y = 1 //( variavel somente leitura (leitura estatica))
var z = 2 //( variavel de escopo global (leitura e escrita dinamica))

console.log(x,y,z)  


// Estruturas Condicionais
if (x >= 0){
  console.log("x é maior que 0")
}

else{
  console.log("x é menor que 0")
}


// Estrutura de repetição (loop for e do-while)
   for (let i = 0; i< 5; i++){
    console.log(i)
   }

do{
  if(x < 5){
    console.log(x)
    x++
  }
} while (x < 5);
  console.log("Loop do-while finalizado");



// Arrays e Objetos
const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];

frutas.push('Abacaxi'); // Adiciona um elemento ao final do array

console.log(frutas); // Exibe o array atualizado

const pessoa = {
  nome: 'João',
  idade: 30,
  profissao: 'Desenvolvedor'
};      
console.log(pessoa.nome); // Acessa a propriedade 'nome' do objeto pessoa   
console.log(pessoa.idade); // Acessa a propriedade 'idade' do objeto pessoa
console.log(pessoa.profissao); // Acessa a propriedade 'profissao' do objeto pessoa   


// POO (Programação Orientada a Objetos)
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  exibirInfo() {
    console.log(`Carro: ${this.marca} ${this.modelo} (${this.ano})`);
  }
}
const meuCarro = new Carro('Toyota', 'Corolla', 2020);
meuCarro.exibirInfo(); // Exibe as informações do carro 





// Função


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

// Arrow function e map 
const novasPeças = peçaDecarro.map(peça => ({
  Roda: ` ${peça.Roda}(Nova)`,
  Porta: ` ${peça.Porta}(Nova)`,
  Motor: ` ${peça.Motor}(Nova)`,
  Pneu: ` ${peça.Pneu}(Nova)`
}));

console.log(novasPeças);
 
