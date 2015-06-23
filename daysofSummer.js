/*
FizzBuzz
Brent is extremely particular about his outfits. Starting with the 1st day of summer, 
he wears a yellow shirt every 3rd day and a pink shirt every 7th day. 
On conflicting days (i.e. days that are multiples of both 3 and 7), 
he opts for his favorite blue tank instead.

1) Ask the user to input the day of summer as an integer, 
and store it in a variable. Use a conditional to test for the various repsonses they could give, 
and alert what Brent will be wearing that day. Keep in mind a user may not input a number, 
and make sure your code is able to handle that with an appropriate response!

*/
var _shirtColor = "";
var _dayofSummer = 0;

do {_dayofSummer = prompt ("How many days of summer have past");}
while (_dayofSummer = "" || _dayofSummer < 1 || _dayofSummer > 365);
console.log(_dayofSummer);

// What is the number divisible by, 3, 7 or both?
//	case statement w/ correct shirt _shirtColor


if (_dayofSummer % 3 === 0 && _dayofSummer % 7 === 0) {
	_shirtColor = "Blue";
	//alert = "Brent's wearing a " + _shirtColor + "shirt!";
	console.log (_shirtColor);
	} 

else if (_dayofSummer % 7 === 0) {
	_shirtColor = "Pink";
	alert = "Brent's wearing a " + _shirtColor + "shirt!";
	} 

else if (_dayofSummer % 3 === 0) {
	_shirtColor = "Yellow";
	alert = "Brent's wearing a " + _shirtColor + "shirt!";} 

else {
	_shirtColor = "Clear";
	alert = "Brent's wearing a " + _shirtColor + "shirt!";
}



/*
// 2) Use a loop to calculate the number of times each summer Brent will wear his yellow shirt, 
// pink shirt, and blue tank. Store each in a variable and alert them.

remove prompt and replace with a loop that will repeat 365 times
add a counter for each variable

_blueDays 3 and 7
_pinkDays 7
_yellowDays 3


for (var _count = 1; _countdown <= 365; _countdown ++)
{

if (_dayofSummer / 3 = true && _dayofSummer /7 = false) { ++ _yellowDays } 

	else{};



}

*/ 
