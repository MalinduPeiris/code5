console.log("hii");

var name= "Maliya";

console.log(name+" broo");

function print(){
    console.log("hi machn");
}

print();
 
function getData(){
    var email= document.getElementById('email').value;
    console.log(email);
}

function getIncome(){
    var income1=parseInt( document.getElementById('income1').value);
    var income2=parseInt( document.getElementById('income2').value);
    var income3=parseInt( document.getElementById('income3').value);
    var avg1=(income1+income2+income3)/3;
    console.log(avg1);
    alert ("Average salary = "+avg);
}

function getmail(){
   var dbUserName = "malindu@gmail.com";
   var dbPassword = "malindu123";
   var email=document.getElementById('email').value
   var password=document.getElementById('password').value
   if(dbUserName==email&&dbPassword==password){
      alert ("login successfull");
   }else{
      alert ("login failed");
    }
}

//////////////////////////////////////////////////////////////////

var num1=75;
var num2=40;
var num3=15;
var average=(num1+num2+num3)/3;
if (average>=75) {
    console.log("A");
} else if(average>=65) {
    console.log("B");
} else if(average>=55) {
    console.log("C");
} else if(average>=35) {
    console.log("D");
}else {
    console.log("F");
}

function Month(){
    var mon = document.getElementById('month').value;
    switch(mon){

        case "january": 
        alert("දුරුතු"); 
            break;
        case "february":
        alert("නවම්"); 
            break;  
        case "march": 
        alert("මැදින්"); 
            break;  
        case "april": 
        alert("බක්"); 
            break; 
        case "may": 
        alert("වෙසක්"); 
            break; 
        case "june":
        alert("පොසොන්");
            break;
        default : 
        alert("not match");    
    }

    
}

for(var i=0 ; i<10 ; i++){
    console.log("Hi macho");

}

function getnumber(){
    var numb =document.getElementById('num').value;
    
    for(var i=1;i<=5;i++){
        numb*=i;
    }
    
    console.log(numb);
    
    if(numb%2==0){
        alert(numb+"   Win...");
    }else{
        alert(numb+"   Lost...");
    }
    
}

var rainData = [54,45,67,34,70,90]
for(var i=0 ; i<rainData.length ; i++ ){
 console.log(rainData[i]);
 
}

var rainData = [54,67,89,90,34,27,59]
var array= rainData.slice(2,6);
console.log(array);




////////////////////////////////////////////////////////////////


/////////////////////////////////////////
const names = ["saman"];
const slicedNames = names.slice(1, 4);

console.log(slicedNames); 



var cars=[" Toyota "," BMW "," Benz "," Honda "," JEEP "," Land cruiser"," Range rover "];

console.log(cars[0]);

console.log(cars);

var stName = "Kavindu";
stdName=90;


////////////////of , in daannath pulwn
for(var val of cars){
    console.log(val);
}

var rainData=[34,65,7,65.3,23.5,78.9,90,78];

var total = 0;
for(var val of rainData){
    total=total+val;
}
console.log(total/rainData.length);



function charaterofname() {
    var name1 = document.getElementById('name1').value;
    let text = name1;
    let result = text.toUpperCase();
   
   var nam='[';
    for(var i=0; i<result.length;i++){
        nam+= result.charAt(i)+", ";
    }
    console.log(nam+"]");

}


function createMultiplicationTable(rows, columns) {
    // Create a container element
    var tableContainer = document.createElement('div');
    
    // Create a table element
    var table = document.createElement('table');
    
    // Create the table rows and columns
    for (var i = 1; i <= rows; i++) {
      var row = document.createElement('tr');
      
      for (var j = 1; j <= columns; j++) {
        var cell = document.createElement('td');
        var product = i * j;
        var cellText = document.createTextNode(product);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      
      table.appendChild(row);
    }
    
    tableContainer.appendChild(table);
    
    // Add the table to the document body
    document.body.appendChild(tableContainer);
  }
  
  // Call the function with desired rows and columns
  createMultiplicationTable(10, 10);
  




























