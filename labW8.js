
/*function hallowereld(getal){
    for(var i = 1 ; i <=getal; i++){
        document.write("Hello World<br>")
    }
}
hallowereld(7);*/


/*function add(number1, number2) {
	return number1 + number2;
}


function sub(number1, number2){
    return number1 - number2;
}


function mul(number1, number2){
    return number1 * number2;
}


function div(number1, number2){
    return number1 / number2;
}


function inc(number){
    return number+1;
}


function dec(number){
    return number-1;
}


document.write('10 + 12 = ' + add(10,12) + '<br>');
document.write('58 - 34 = ' + sub(58,34) + '<br>');
document.write('6 * 7 = ' + mul(6,7) + '<br>');
document.write('144 / 12 = ' + div(144,12) + '<br>');
document.write('12 + 1 = ' + inc(12,1) + '<br>');
document.write('34 - 1 = ' + dec(34,1) + '<br>');*/



/*var name;
var age;

while ( name != 'stop'){
	name = prompt('Wat is je naam');
	if ( name != 'stop'){
		 age = prompt('Wat is je leeftijd');
		 NameAndAge(name, age);
	}		
}


function NameAndAge(name, age){
	document.write('Hallo ' + name + ' je leeftijd is ' + age + ' jaar' + '<br>' );
}*/











var table = prompt('vul hier een tafel van 1 tot en met 10 in.')
	for (var j = 1; j <= table; j++) {
		createTable(j);
		document.write('<br>')
}
			

function createTable(getal){
	for (var i = 1; i <= 10; i++) {
		document.write(i + ' x ' + getal + ' = ' + getal*i + '<br>')
		
	}
	
	
}









