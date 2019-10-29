// import { soma, sub } from './funcoes';
// import somaFunction from './soma'; Aqui tem o export default
import { soma as somarFuncoes, sub } from './funcoes';
// import soma, { sub } from './funcoes'; Aqui o sub esta sem default no export 

// console.log(somaFunction(1,2));
// console.log(sub(5,4))
console.log(somarFuncoes(5,5));
console.log(sub(8,3));
