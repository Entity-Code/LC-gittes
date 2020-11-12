// // dichiaro un array
// const array1 = [1, 4, 9, 16];
//
// // passo una function arrow che moltiplica x(ogni valore di array1) per due
// //"mappo" ogni elemento, -> si crea un nuovo array map1 che sarà una copia di array1 con le modifiche nella arrow, ovvero i valori moltiplicati per due
// const map1 = array1.map(x => x * 2);
//
// console.log(map1);
// // expected output: Array [2, 8, 18, 32]


// //filtrami gli elementi 'Paolo' METODO TRADIZIONALE CON IL FOR
// const students = ['Paolo', 'Giulia', 'Marco'];
// var newArr = [];
// for (let i = 0; i < students.length; i++) {
//    let element = students[i];
//    console.log(element);
//    if (element === "Paolo") {
//       newArr.push(element);
//    }
// }
// console.log(students, newArr);

const numbers = [3,4,6,7,9,11];

//EQUIVALENTE CON FILTER
const filteredNumbers = numbers.filter((element) => element % 2 !== 0);


console.log(numbers, filteredNumbers);
