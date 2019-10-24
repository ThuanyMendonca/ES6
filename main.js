class List {
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data)
    }
}
// Herança
class TodoList extends List {
    /* Inicializa a variavel
        constructor(){
            this.todos = []
        }
        addTodo(){
            this.todos.push('Novo todo')
            console.log(this.todos)
    }*/
    // Adicionando item na classe que herda da classe List
    constructor(){
        // Chamando a classe pai (List)
        super();
        // Adicionando elementos na class TodoList
        this.usuario = [];
    }
    mostrarUsuario(){
        this.usuario.push('Thuany')
        console.log(this.usuario);
    }

}
// Instanciando a classe
const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo');
    MinhaLista.mostrarUsuario();    
}


// Classes com métodos static 
class Matematica {
    // Geralmente não tem o constructor e o static não enxerga como os metodos add por exemplo
    static soma(a, b){
        // é utilizado para executar algo e retornar
        return a + b
    }
}

// Não precisa instanciar a classe com o new
console.log(Matematica.soma(2,3));

// Definindo variáveis
const a = 1; // não pode ter seu valor reatribuido

// Nesse exemplo ele deixa alterar por causa da mutação
const usuario = {nome: 'Thuany'}
usuario.nome = 'Teste' 
console.log(usuario);

// Variável de escopo
function teste (x){
    // O let só aparece dentro do escopo, ou seja, dentro das chaves
    let y = 2;

    if(x > 5){
        // Quando adiciona o y aqui, quando executa teste(10) o y vale 4
        // se não tiver o y = 4, exibe o 2
        let y = 4 
        console.log(x, y)
    }
}
teste(10)
//console.log(y) // Aparece como não definido

const arr = [1,3,4,5,8,9]
// map -> percorrer o vetor e retornar algo

// item é 1,3,4,5,8,9
// index posicao do elemento no vetor
const newArr = arr.map(function(item, index){
    return item + index;
});
console.log(newArr);

// Transforma o vetor e uma unica variavel
// total 0 e o next 1
const sum = arr.reduce(function(total, next){
    return total + next;
    // total = 0 next = 1
    // total = 1 next = 3
    // total = 4 next = 4
});
console.log(sum)

// Filter
const filter = arr.filter(function(item){
    // retornar true ou false
    // retorna apenas os números pares
    return item % 2 === 0
});
console.log(filter)

// Find
const find = arr.find(function(item){
    return item === 4; // se não acha, ele retorna undefined
});
console.log(find)

const ar = [1,3,4,5,6]

// const novoArr = ar.map(function(item){
//     return item * 2;
// });

// Arrow Function
const novoArr = ar.map((item)=>{
    return item * 2;
});
console.log(novoArr);

// Quando a function retorna apenas uma linha pode fazer:
const meuArray = ar.map(item => item * 2)
console.log(meuArray)

// Não funciona para objeto
const meuTeste = () => [1,2,3]
console.log('Com Arrow function: ' + meuTeste());
// Funciona
const comReturn = () =>{
    return { nome: 'Objeto'}
} 

// Assim funciona
const comObj = () => ({ nome: 'Thuany' });
console


// Valores padrão para os parametros (valor padrão quando não passa todos os parametros)
function somar(a = 3, b = 6){
    return a + b;
}
console.log(somar(1));
console.log(somar());

const vouSomar = (a = 3, b = 6) => a + b;
console.log(vouSomar(1));
console.log(vouSomar());

const meuUsuario = {
    nome: 'Thuany',
    idade: 22,
    endereco: {
        cidade: 'Franca',
        estado: 'SP'
    }
}
console.log(meuUsuario);
// Faria assim:
const nome = meuUsuario.nome;
const cidade = meuUsuario.endereco.cidade;

// Desestruturação
// const { nome, idade, endereco: { cidade } } = meuUsuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);

function mostraNome({nome, idade}){
    console.log(nome, idade);
}
mostraNome(meuUsuario);






