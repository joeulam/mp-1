function addition(){
  const firstVal = Number(document.getElementById("firstNumber").value);
  const secondVal = Number(document.getElementById("secondNumber").value);
  const result = firstVal + secondVal;
  if(result < 0){
    document.getElementById("result").style.color = "red";
  }
  else{
    document.getElementById("result").style.color = "black";
  }
  document.getElementById("result").innerText = result;
}

function subtraction(){
  const firstVal = Number(document.getElementById("firstNumber").value);
  const secondVal = Number(document.getElementById("secondNumber").value);
  const result = firstVal - secondVal;
  if(result < 0){
    document.getElementById("result").style.color = "red";
  }
  else{
    document.getElementById("result").style.color = "black";
  }
  document.getElementById("result").innerText = result;
}

function multiplication(){
  const firstVal = Number(document.getElementById("firstNumber").value);
  const secondVal = Number(document.getElementById("secondNumber").value);
  const result = firstVal * secondVal;
  if(result < 0){
    document.getElementById("result").style.color = "red";
  }
  else{
    document.getElementById("result").style.color = "black";
  }
  document.getElementById("result").innerText = result;
}

function division(){
  const firstVal = Number(document.getElementById("firstNumber").value);
  const secondVal = Number(document.getElementById("secondNumber").value);
  const result = firstVal / secondVal;
  if(result < 0){
    document.getElementById("result").style.color = "red";
  }
  else{
    document.getElementById("result").style.color = "black";
  }
  document.getElementById("result").innerText = result;
}

function powerFunction(){
  const firstVal = Number(document.getElementById("firstNumber").value);
  const secondVal = Number(document.getElementById("secondNumber").value);
  const result = recursiveHelper(firstVal,secondVal)
  if(result < 0){
    document.getElementById("result").style.color = "red";
  }
  else{
    document.getElementById("result").style.color = "black";
  }
  document.getElementById("result").innerText = result;
}

function recursiveHelper(baseNumber, powerNumber){
  if(powerNumber === 1){
    return baseNumber
  }
  else{
    return baseNumber * recursiveHelper(baseNumber, powerNumber-1)
  }
}

function clearField(){
  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
  document.getElementById("result").innerText = "";
  document.getElementById("result").style.color = "black";
}

