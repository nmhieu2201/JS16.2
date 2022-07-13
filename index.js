function checkPrimeNumber (num){
  var check = true;
  if (num < 2){
    check = false;
  }
  else
  if (num === 2){
    check = true;
  }
  else 
  if (num % 2 === 0){
    check = false;
  }
  else {
    for (var i = 3; i <= Math.sqrt(num); i += 2)
    {
        if (num % i == 0) {
            check = false;
            break;
        }
    }
  }
  return check;
}
function printPrime (){
  var getNum = +document.getElementById("getNumberInput").value;
  var output = " ";
  for (var index = 0; index <= getNum; index++){
    if (checkPrimeNumber(index)){
      output += index + " ";
    }
  }
  document.getElementById("result").innerHTML = output;
}