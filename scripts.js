// 1 - var, let e const

//variáveis declaradas com var têm escopo de função ou global- Podem ser acessadas de dentro de qualquer lugar dentro da função em que foram declaradas ou do escopo global

//variáveis declaradas com let ou const têm escopo de bloco- Só podem ser acessadas de dentro do bloco de código em que foram declaradas, incluindo qualquer bloco aninhado dentro desse bloco.


var x = 10
var y = 15

if(y>10){
    var x = 5
    console.log(x);
}

console.log(x);

let a = 10
let b = 15

if(b>10){
    let a = 5
    console.log(a);
}

console.log(a);

let i = 100 

for(let i = 0; i < 5; i++){
    const name = 'Luis'
    console.log(name);
}

const name = 'Fernando'
console.log(name);

// 2 - Arrow Function

//  o valor de this dentro de uma arrow function é o mesmo que o valor de this do escopo em que a função está definida. Isso pode ser muito útil em situações em que você precisa manter o contexto this ao chamar uma função de dentro de outra função.

const sum = function sum(a, b){
    return a + b 
}

const arrowSum = (a , b) => a + b

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
    if(name){
        return 'Olá' +name+ '!'
    } else{
        return 'Olá!'
    }
         
}

console.log(greeting('Luis'))
console.log(greeting())

const testeArrow = () => console.log('Testou');

testeArrow()

const user = {
    name: "Theo",
    sayUserName(){
        setTimeout(function(){
            console.log(this);
            console.log('Username: ' +this.name);
        }, 500)
    },
    sayUserNameArrow(){
        setTimeout(() => {
            console.log(this);
            console.log('Username: ' +this.name);

        }, 700)
    }
}

user.sayUserName()
user.sayUserNameArrow()

// 3 - Método Filter

//O método filter é uma função de array em JavaScript que permite filtrar elementos de um array com base em um critério específico. A função filter recebe como argumento uma função que retorna true ou false. Essa função é executada para cada elemento do array e, se retornar true, o elemento é incluído no novo array retornado. Caso contrário, o elemento é excluído.


const array = [1, 2, 3, 4, 5]
console.log(array);

const highNumbers = array.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    {name: "Luis", available: false},
    {name: "Pedro", available: true},
    {name: "Felipe", available: false},
    {name: "Aristeu", available: true}
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers);
console.log(notAvailableUsers);

// 4 - Método Map
//  Permite transformar os elementos de um array de acordo com uma função específica. A função map recebe como argumento uma função que é aplicada a cada elemento do array. Essa função deve retornar o valor transformado do elemento, que será incluído no novo array retornado.

const products = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Cafeteira', price: 519.99, category: 'Eletro'},
    {name: 'Fogão', price: 1499.90, category: 'Eletro'},
    {name: 'Calça jeans', price: 49.99, category: 'Roupas'},
]

products.map((product) => {
    if (product.category === 'Roupas') {
        product.onSale = true
    }
})

console.log(products);
 
// 5 - Templates literals

// permite concatenar strings de forma mais simples, colocando variáveis entre texto

const userName =  'Luis'
const age = 20

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos.`)
console.log('O nome do usuário é ' +userName+ ' e ele tem' +age+ ' anos.');

// 6 - Destructuring

// Utilizado em Arrays e Objetos, transforma os itens em variáveis

const fruits = ['Maçã', 'Mamão', 'Laranja']
const [f1, f2, f3] = fruits

console.log(f1);
 console.log(f2);

const productDetails = {
    name: 'Mouse',
    price: 19.99,
    category: 'Periféricos',
    color: 'azul',
}

const {
    name: productName,
    price,
    category: productCategory,
    color,
} = productDetails

console.log(
    `O produto é um ${productName}, custa R$${price}, pertence à categoria ${productCategory} e é na cor ${color}.`
);

 
// 7 - Spread Operator

//  Utilizado em Arrays e Objetos, utilizado para unir vários arrays de maneira simples ou adicionar valores de um objeto a outro

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3);

const a4 = [0, ...a1, 4]

console.log(a4);

const carName = {name: 'Gol'}
const carBrand = {brand: 'VolksWagem'}
const otherInfos = {km: 100000, price: 49.000}

const car = {...carName, ...carBrand, ...otherInfos, wheels: 4}

console.log(car);

// 8 - Classes 
// Agora o JS tem o recurso implementado e não necessitando mais de utilizar constructor functions

class Product{
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product('Camisa Gola V', 20)

console.log(shirt.name);
console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(50));

const tenis = new Product('Tênis verde', 120)
console.log(tenis.productWithDiscount(20));

// 9 Herança
// Utilizamos a palavra extends para referir a classe herdada, e as propriedades DelayNode, devem ser enviadas via função pelo super

class ProductWithAttributes extends Product{
    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }

    showColors(){
        console.log('As cores são: ');
        this.colors.forEach((color) => {
            console.log(color);
        })
    }
}

const hat = new ProductWithAttributes('Chapéu', 29.99, [
    'Preto',
    'Azul',
    'Verde'
])

console.log(hat.name);
console.log(hat.productWithDiscount(30));
hat.showColors()


