////// Q NO 1


var firstName =prompt("Enter Your First name:")
var lastName =prompt("Enter Your Last name:")


var fullName = firstName + " " + lastName

alert("Hello "  + fullName + "!")


////// Q NO 2

var userInput =prompt("Enter Your Favourite mobile phone model:")

var userAns = userInput

 document.write("My favourite phone is: "  +  userAns + "<br>")
 document.write("Length of string is: " + userAns.length)

/////// Q NO 3

var string = "Pakistani"

var Index = string.indexOf("n")

 document.write("String: " + string + "<br>")
 document.write("Index of 'n': " + Index)

////// Q NO 4

var greeting = "Hello World"

 var lastIndex = greeting.lastIndexOf("l")

  document.write("String: " + greeting + "<br>")
 document.write("Last index of 'l': " + lastIndex)


///// Q NO 5

var country = "Pakistani"

var charIndex = country.charAt("3")

document.write("String: " + country  + "<br>")
 document.write("Character at index 3: " + charIndex)


////// Q NO 6

var firstName =prompt("Enter Your First name:")
var lastName =prompt("Enter Your Last name:")


var fullName = firstName.concat(" " , lastName)

alert("Hello "  + fullName + " !")


///// Q NO 7 

var city = "Hyderabad"

 document.write("City: " + city + "<br>")
 document.write("After replacement: " + "Islam" + city.slice(5 , 9) )


/// Q NO 8 

var message = "Ali and Sami are best friends. They play cricket and football together"

 document.write( message.replaceAll("and" , "&")  )


// Q NO 9

var str = "472"
document.write("Value: " + str + "<br>")
document.write("Type: " + typeof str + "<br>")

str = parseInt(str)

document.write("Value: " + str + "<br>")
document.write("Type: " + typeof str)


//// Q NO 10 


var userInput = prompt("Enter Your Favourite Dry Fruit!")

var userInput = userInput.toUpperCase()

document.write( userInput)



/// Q NO 11 


 


/// Q NO 12 


var num = 35.36

document.write( "Number: " + num + "<br>" )

var num = 3536

document.write( "Result: " + num.toString() )


// Q NO 13

var userName = ['@' , '.' , ',' , '!']
var userInput = prompt('Enter username here: ')
var isTrue = false
for(var i = 0; i <userName.length ; i++){
    for(var j = 0 ; j < userInput.length ; j++){
        if(userInput[j] == userName[i]){
            isTrue = true
            alert('Please enter a valid user name. Dont use '+ userName[i] + ' in user name.')
            break
        }
    }
}

if(!isTrue){
    alert('Valid username is: '+ userInput)
}


// Q NO 14


var bakeryItems = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties'];
var userInput = prompt('Welcome to ABC Bakery. What do you want to order Sir/Mam:')
var isTrue = 0;
for( let i = 0 ; i < bakeryItems.length ; i++){
    if(bakeryItems[i] === userInput.toLowerCase()){
        isTrue=1;
        alert(userInput +' is available at index ' + i + ' in our bakery');
        break;        
    }
}

if(!isTrue){
    alert('We are sorry. '+ userInput +' is not available in our bakery');
}



/// Q NO 15 

var password = 'kiran123'
var isTrue = false
for(var i = 0 ; i < password.length ; i++){
    if(password[0]>= 0 && password[0]<=9){
        isTrue= true
        console.log('Password can not begin with a number\nPlease enter a valid password');
        break
    }
    else if (password.length< 6){
        isTrue= true
        console.log('Password must be atleast 6 characters');
        break
    }
    else if(!/[a-z]/i.test(password) || !/[0-9]/.test(password)){
        isTrue= true
        console.log('Password should contain alphabets and numbers');
        break
    }
}
if (!isTrue) {
    console.log('Congrats! Your password is correct');
    
}

/// Q NO 16 

var university = 'University of karachi';
var str = university.split('');
for(var i = 0 ; i < str.length ; i++){
    document.write(str[i]+ '<br>')
}

// Q NO 17 

var input = 'Pakistan'
document.write('User input: ' + input + "<br>");
document.write('Last character of input: '+ input.charAt(input.length-1));


// Q NO 18 
var str  = ' The quick brown fox jumps over the lazy dog.'
var match = 0
var string = str.split(' ');
for( var i = 0; i < string.length ; i++){
    if (string[i].toLowerCase() === 'the') {
        match ++ ;       
    }    
}
document.write('Text: '+str);
document.write('There are '+ match + ' occurrence (s) of word "the"');