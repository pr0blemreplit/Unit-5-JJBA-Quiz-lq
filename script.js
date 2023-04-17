let button1 = document.querySelector('.submitButton')
let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let result = document.querySelector('.result')


button1.onclick = function() {
  let userInput1 = input1.value
  let userInput2 = input2.value

  if (userInput1 == 'yes' && userInput2 <= 5){
    result.innerHTML = "Your character is Koichi"
  }

else if (userInput1 == 'no' && userInput2 <= 5){
    result.innerHTML = "Your character is Josuke"
  }


else if (userInput1 == 'yes' && userInput2 >= 6){
    result.innerHTML = "Your character is Kira"
  }
  
else if (userInput1 == 'no' && userInput2 >= 6){
    result.innerHTML = "Your character is Okuyasu"
  }

else {
    result.innerHTML = "You entered something wrong"
  }


}