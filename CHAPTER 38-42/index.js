/// Q NO 1 

function power (a, b) {
    var result = 1;
    for (var i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
console.log(power(2, 4)); 


//// Q NO 2 

function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
}

var year = 2016;
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}


///// Q NO 3

  function triangle (a, b, c) {
 
    var s = (a + b + c) / 2;
    var area = (s * (s - a) * (s - b) * (s - c));
    return parseFloat(area);
}

var a = 5;
var b = 7;
var c = 3;
var area = triangle (a, b, c);
console.log("Area of the triangle: " + area);


/// Q NO 4


  function mainfunction (marks1, marks2, marks3) {
    var average = avgMarks (marks1, marks2, marks3);
    var percentage = perMarks (marks1, marks2, marks3);

    document.write("Average Marks: " + average + "</br>");
    document.write("Percentage: " + percentage + "%" + "</br>");
}

function avgMarks(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
}

function perMarks(marks1, marks2, marks3) {
    var totalmarks = 300; 
    var obtmarks = marks1 + marks2 + marks3;
    return (obtmarks / totalmarks) * 100;
}


mainfunction(75, 85, 90);



//// Q NO 5


  function custof(str, char) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return i;
      }
    }
    return -1;
  }

  var result = custof("hello", "e"); 
  console.log(result);
  


///// Q NO 6 



 function remove(para) {
  if (para.length <= 25) {
      return "My Favourite Fruit is Mango";
  }
  
  return para.replace(/[aeiouAEIOU]/g, '');
}


var para = "My Favourite Fruit is Mango";
var result = remove(para);
document.write(result); 



///// Q NO 7 





///// Q NO 8 






 //// Q NO 9



  function overtime(work) {
    var hours = 40;
    var overtimerate = 12.00;
    var overpay = 0;

 
    if (work > hours) {
        var overtimeHours = work - hours;
        overpay = overtimeHours * overtimerate;
    }

    return overpay;
}


var work = 60; 
var overpay = overtime(work);
console.log("Overtime Pay: RS." + overpay);




/////// Q NO 10 


function withdraw (balance){
    var amount = +prompt("Enter you Amount!")

if(amount <= balance){
totalbalance -= amount;

alert(" widhdraw successful Remaning balance : " + totalbalance + " hunderd")

}

else{
    alert(" invalid balance")
}
  }

var totalbalance = 50000;
withdraw(totalbalance)