"use strict";

// Template literals => incluir variaveis dentro de string
var nome = 'Thuany';
var idade = 22;
console.log("Meu nome \xE9: ".concat(nome, " e tenho ").concat(idade, " anos.")); // Sintaxe curta de objeto

var usuario = {
  // quando o nome da propriedade é igual do objeto, não precisa repetir
  nome: nome,
  idade: idade,
  teste: 'Teste'
};
