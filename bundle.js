"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}(); // Herança


var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  /* Inicializa a variavel
      constructor(){
          this.todos = []
      }
      addTodo(){
          this.todos.push('Novo todo')
          console.log(this.todos)
  }*/
  // Adicionando item na classe que herda da classe List
  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    // Chamando a classe pai (List)
    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this)); // Adicionando elementos na class TodoList

    _this.usuario = [];
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostrarUsuario",
    value: function mostrarUsuario() {
      this.usuario.push('Thuany');
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List); // Instanciando a classe


var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo todo');
  MinhaLista.mostrarUsuario();
}; // Classes com métodos static 


var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    // Geralmente não tem o constructor e o static não enxerga como os metodos add por exemplo
    value: function soma(a, b) {
      // é utilizado para executar algo e retornar
      return a + b;
    }
  }]);

  return Matematica;
}(); // Não precisa instanciar a classe com o new


console.log(Matematica.soma(2, 3)); // Definindo variáveis

var a = 1; // não pode ter seu valor reatribuido
// Nesse exemplo ele deixa alterar por causa da mutação

var usuario = {
  nome: 'Thuany'
};
usuario.nome = 'Teste';
console.log(usuario); // Variável de escopo

function teste(x) {
  // O let só aparece dentro do escopo, ou seja, dentro das chaves
  var y = 2;

  if (x > 5) {
    // Quando adiciona o y aqui, quando executa teste(10) o y vale 4
    // se não tiver o y = 4, exibe o 2
    var _y = 4;
    console.log(x, _y);
  }
}

teste(10); //console.log(y) // Aparece como não definido
