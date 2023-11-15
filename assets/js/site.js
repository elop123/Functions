// // write cool JS here!!
// const myInfo = 'en variabel';
// const myBooks = ["The Catcher in the Rye",
//     "To Kill a Mockingbird",
//     "1984",
//     "Pride and Prejudice",
//     "The Great Gatsby",
//     "The Hobbit",
//     "Harry Potter and the Sorcerer's Stone",
//     "The Lord of the Rings",
//     "The Da Vinci Code",
//     "The Hunger Games"]
    
//     console.group('konsole opgave');
//     console.log('Jeg er en almindenlig konsol log');
//     console.log( myInfo);
//     console.warn('jeg er en adversel!');
//     console.error('jeg er en fejl!');
//     console.table(["The Catcher in the Rye", "To Kill a Mockingbird","1984","Pride and Prejudice","The Great Gatsby","The Hobbit","Harry Potter and the Sorcerer's Stone","The Lord of the Rings","The Da Vinci Code","The Hunger Games"]);
    
//     console.time("default");
//     console.timeLog("default");
    

console.groupCollapsed('my sum');

let mySum=MyAddition(20,200);

console.log(mySum);

console.groupEnd();



//adder to værdier sammen
function MyAddition(valueOne, valueTwo){
    let result=valueOne+valueTwo;
    return result;
}

console.groupCollapsed("MyAddition");
//product section
let myProduct=MyMultiplication(20,200);
console.log(myProduct);
console.groupEnd();


//functions--------------------------------------------------------------
//ganger to værdier returnerer produktete, værdier skal være numbers
function MyMultiplication(valueOne, valueTwo){
    let result=valueOne*valueTwo;
    return result;
}

//Division function, where 2 numbers are divided:
console.groupCollapsed("MyDivision");
//product section
let myResultat=MyDivision(200,20);
console.log(myResultat);
console.groupEnd();

function MyDivision(valueOne, valueTwo){
    let result=valueOne/valueTwo;
    return result;
}

//anonymous functions---------------------------------
let myvar='var';
console.log(
    function () {
        console.log('anonymous function');
        console.log('anonymous 2');
        console.log('anonymous 3');
        console.log('anonymous 4');
    }
)


let myButton = document.getElementById('hej');

myButton.addEventListener('click', function (event) {
console.log(event.target.innerText);
alert('hej');

}

);


