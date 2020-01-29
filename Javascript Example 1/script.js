var numberInput = window.prompt("Please enter a positive 2 digit integer"); //prompt user for input and store inside nunmberIntput variable
var numberToInt = parseInt(numberInput); //parsing the numberInput var into a number/int.

evenNumbers(numberToInt); //function to pass the numberToInt value and calculate the even numbers within, and display them.
document.write("<br>"); //breaking a line between the functions to clean up the disaply
oddNumbers(numberToInt); //function to pass the numberToInt value and calculate the odd numbers within, and display them.

function evenNumbers(evenN1){
  document.write("Here are your even numbers: ");
  for(i=0; i<=evenN1; i+=2){
    document.write(i + ", "); //for loop passes through each itteration, then adds 2 until "i" matches the users input, and displays these numbers
  }
}

function oddNumbers(oddN1){
  document.write("Here are your odd numbers: ");
  for(j=1; j<oddN1; j+=2){
    document.write(j + ", "); //for loop passes through each itteration, then adds 2 until "j" matches the users input, and displays these numbers
  }
}
