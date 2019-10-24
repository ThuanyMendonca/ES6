// REST (pega o resto das propriedades)

const usuario = {
    nome: 'Thuany',
    idade: 22,
    empresa: 'StartPDV'
};

const { nome, ...resto } = usuario;
//Imprimiu Thuanys
console.log(nome);
// Imprimiu idade: 22, empresa: StartPDV
console.log(resto);

const arr = [1,2,3,4];
const [ a, b, ...c ] = arr;
console.log(a);
console.log(b);
console.log(c);

// function soma(...params){
//     return params.reduce((total, next)=> total + next);
// }
// ou
function soma(a,b, ...params){
    return params.reduce((total, next) => total + next);
}
console.log(soma(1,3,4));
