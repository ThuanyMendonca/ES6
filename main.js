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





