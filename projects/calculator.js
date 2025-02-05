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
  let secondVal = Number(document.getElementById("secondNumber").value);
  let result = 1
  
  if (secondVal < 0) {
    secondVal *= -1
    let div = 1
    for(let i = 0; i < secondVal; i++){
      div *= firstVal
    }
    result = 1 / div
  }
  else{
    for(let i = 0; i < secondVal; i++){
      result *= firstVal
    }
  }
  
  
  if(result < 0){
    document.getElementById("result").style.color = "red";
  }
  else{
    document.getElementById("result").style.color = "black";
  }
  document.getElementById("result").innerText = result;
}



function clearField(){
  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
  document.getElementById("result").innerText = "";
  document.getElementById("result").style.color = "black";
}

