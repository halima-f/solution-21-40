//// Q NO 1                      

var num = +prompt("Enter a positive integer!")

document.write("Number: "+ num + "<br>" )
document.write("round off value: "+ Math.round(num) + "<br>" )
document.write("floor value: "+ Math.floor(num) + "<br>" )
document.write("ceil value: "+ Math.ceil(num) + "<br>" )


//// Q NO 2     
 
var num = +prompt("Enter a negative floating point number!")
 

document.write("Number: "+ num + "<br>" )
document.write("round off value: "+ Math.round(num) + "<br>" )
document.write("floor value: "+ Math.floor(num) + "<br>" )
document.write("ceil value: "+ Math.ceil(num) )


//// Q NO 3     

var num = +prompt("Enter any positive or negative number!")

document.write("The absolute value of: "+ num + " is " + Math.abs(num))


//// Q NO 4     


var num = 6
var num = 4


var diceValue1 = Math.random()*6
var diceValue2 = Math.random()*6
var dice1 = Math.floor(diceValue1)+1
var dice2 = Math.floor(diceValue2)+1

document.write("Random dice value: "+ dice1 + "<br>" )
document.write("Random dice value: "+  dice2 )


//// Q NO 5     


var head = Math.random()*2
var tail = Math.random()*2
var coinValue1 = Math.floor(head)+1
var coinValue2 = Math.floor(tail)+1

document.write(coinValue1 +  "    Random coin value: Heads" + "<br>" )
document.write(coinValue2  +   "    Random coin value: Tails")


//// Q NO 6     

var randomNum = Math.random()*100
var num = Math.floor(randomNum)+1

document.write("Random number between 1 and 100 : "+ num + "<br>" )


//// Q NO 7

var weight = prompt("Enter your weight!")

var userWeight =parseFloat(weight)

document.write("The Weight of user is : "+ userWeight + " kilogram" + "<br>" )



////  Q NO 8

var userInput = +prompt("Enter any number between 1 to 10 !");

var random = Math.random()*10;
var sceretNo = Math.floor(random)+1;

if(userInput === sceretNo){
alert("congratulations!!!")
}else{
  alert("try again!")
}
