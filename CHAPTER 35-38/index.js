///// Q NO 1


function dateAndTime (){
    var date = new Date();
    console.log(date);
}

dateAndTime();


//// Q NO 2 

function greet (fName , lName){
    alert('Hello ' + fName + ' ' + lName + "!");
}

var firstName = prompt("Enter your first name!");
var lastName = prompt ("Enter your last name!");
greet(firstName , lastName)


/////  Q NO 3 

function add (fNum , sNum){
    return fNum + sNum
}
var fNumber = +prompt('Enter the first number!')
var sNumber = +prompt('Enter the second number!')
var addNumbers = add(fNumber ,sNumber)
console.log(addNumbers);


////// Q NO 4 


function calculator (num1 , num2 , operator ){
    if(operator === '+'){
        return num1 + num2 ;
    }else if (operator === '-'){
        return num1 - num2
    }else if (operator === '*'){
        return num1 * num2;
    }else if (operator === '/'){
        return num1 / num2
    }else {
        alert('Choose those operators which are in options! ')
    }

}


var number1 = +prompt('Enter the first number: ')
var number2 = + prompt('Enter the second number ')
var operator = prompt('Choose the operation which you are want to apply:\n1.  +\n2.  -\n3.  *\n4.  / ' )
var result = calculator(number1 , number2 , operator);
console.log('Result '+ result);



/////  Q NO 5 


function applySquare (number){
    return number * number
}

var square = +prompt('Enter a number which you want to square!')
var result = applySquare(square);
console.log('result: '+ result);



//// Q NO 6


function factorial(num) {
    if (num === 0 || num === 1) {
        return 1
    } else if (num < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    } else {
        var result = 1
        for (var i = 2; i <= num; i++) {
            result *= i
        } return result
    }
}
var number = +prompt('Enter a number to findout the factorial! ')
var factor = factorial(number)
console.log(factor);


///// Q NO 7 


function counting (start , end){
    if(start < end){
        console.log('Forward counting');
        for(var i = start ; i <= end ; i++){
           console.log(i);

        }
    }else if (end < start){
        console.log('Backward counting');
        for(var i = start ; i >= end ; i--){
            console.log(i);            
        }
    }
}

var num1 = +prompt('Enter a start number: ')
var num2 = +prompt('Enter an end number: ')
counting(num1 ,num2);


///// Q NO 8


function hypo (p , b){

    function square(num){
        return num* num
    }

    var hypotenuse = square(p) + square(b)
    return  hypotenuse
}
var per = +prompt('Enter value for perpendicular: ')
var base = +prompt('Enter value for base: ')

var result = hypo( base , per )
console.log( 'Hypotenuse: '  + result);


function hypotenuse (base , perpendicular){
    return ((base*base) + (perpendicular* perpendicular))
}

var result = hypotenuse(2 , 4);
console.log(result);



/// Q NO 9 


function calculateAreaOfRectangle (width  , height){
    return width * height
}


var w = +prompt('Enter the value for width: ')
var h = +prompt('Enter the value for height: ')
var area = calculateAreaOfRectangle(w , h)
console.log( 'Area of a rectangle: ' + area);


var area = calculateAreaOfRectangle(4 , 8)
console.log( 'Area of a rectangle: ' + area);



//// Q NO 10


function checkPalindrome(text) {
    text = text.toLowerCase()
    var reversed = text.split('').reverse().join('');
    if (text === reversed) {
        return text + ': It is a palindrome';
    } else {
        return text + ': It is not a palindrome';
    }
}

var palindromeText = prompt('Enter a text to check whether it is palindrome or not: ')
console.log(checkPalindrome(palindromeText));



/////  Q NO 11


function capitailze( str) {
    var splitString = str.split(' ');
    var subString
    var join = ''
    for (var i = 0; i < splitString.length; i++) {
        subString = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1)
        join += subString + ' ';

    } return join
}

var str = prompt('Enter any string!')
console.log(capitailze(str.trim()));



////  Q NO 12 


function findLongestWord(str) {
    var words = str.trim().split(' ');

    var longestWord = '';
    var maxLength = 0;

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            longestWord = words[i];
            maxLength = words[i].length;
        }
    }
    return longestWord;
}

var str = 'Web Development Tutorial';
console.log(findLongestWord(str)); 



/////  Q NO 13


function countTheCharacter (string , char){
    var matchString = string.toLowerCase()
    var matchChar   = char.toLowerCase()
    var counter = 0

    for(var i = 0 ; i < matchString.length ; i++){
        if(matchString[i] === matchChar){
            counter++
        }
    }

    return counter
}
var string = 'JSResourceS.com'
var char = 's'
console.log( 'The occurence of ' + char + ' in ' + string + ' is '  +countTheCharacter(string , char));



///// Q NO 14


function calcCircumference (r){
    var pie = 3.142
    return 2 * pie * r
}

function calcArea (r){
    var pie = 3.142 
    return pie * r * r
}

var radius = +prompt('Enter the radius to findout the Area and circumference of circle!')
console.log( 'The area of circle is ' +calcArea(radius));
console.log( 'The circumference of circle is ' +calcCircumference(radius));