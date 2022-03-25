console.log('Hello, TypeScript');

function add(a: number, b: number) {
  return a + b;
}

const sum = add(2, 3);
console.log(sum);

// Boolean
let muted: Boolean = true;
muted = false;
// Error de sintaxis
// muted = "callado"; 

// Numeros
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// String
let nombre: string = 'David';
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ['Isabel','Nicole','Raul']
// Error de sintaxis
// people.push("5");
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("David");
peopleAndNumbers.push(1);

// Enum
enum Colores {
  Rojo = 'Rojo', 
  Verde = 'Verde', 
  Azul = 'Azul'
}
let colorFavorito: Colores = Colores.Azul;
console.log(`Mi color favorito es el ${colorFavorito}`)

// Any
let comodin: any = "Joker";
comodin = { type: 'Wildcard'}

// Object
let someObject: object = {type: 'Wildcard'}

// Funciones
function addOperation(a: number, b:number) {
  return a + b;
}
const sumOperation = addOperation(4, 6);

function createAdder (a: number): (number) => number {
  return function (b: number) {
    return b + a;
  }
}

const addFour = createAdder(4)
const fourPlusSix = addFour(6)

function fullName(firstName?: string, lastname: string = "Smith"): string {
  return `${firstName} ${lastname}`
}

const david = fullName('Agente');
console.log(david);


// Interfaces
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
}

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  // color: Color.Rojo,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString());
