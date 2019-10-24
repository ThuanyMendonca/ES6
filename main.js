// Template literals => incluir variaveis dentro de string
const nome = 'Thuany';
const idade = 22;

console.log(`Meu nome é: ${nome} e tenho ${idade} anos.`);

// Sintaxe curta de objeto
const usuario = {
    // quando o nome da propriedade é igual do objeto, não precisa repetir
    nome,
    idade,
    teste: 'Teste'
}