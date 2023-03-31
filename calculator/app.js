
//   var para = document.getElementById("New")
//   para.innerHTML = "Hello this is " + name.value;
//   name.value = "";

// }
// function getname (){
//   var c = document.getElementById("name")
//      c.value  = "Hamza Basheer"

// }
// getname()
var inputUser = document.querySelector('.inputUser')

function getHistory() {
  return document.getElementById("history-value").innerText;
}
function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}

function getnumber(num) {
  
  var result = document.getElementById("result");
  // var history = getHistory();
  result.value += num;
  
  
}


// var opr = result.value
//   console.log(opr)
  
function getoperator(num){
  var result = document.getElementById("result");
  
  result.value += num;
  console.log(result.value.charAt('-'));
  if(result.value.indexOf('-')== '-'){
    console.log('hello')
    printHistory(result.value);
  var history = getHistory();
  console.log(history)
  }
  
  
  var result2  = result.value.slice(0,result.value.length-1)
   printHistory(eval(Number(result.value.slice(0,result.value.length-1))+Number(result2))); 

  console.log(result2)
  console.log(result.value)
  // var result1 = eval(history+result.value)
  // printHistory(result1)
  result.value= eval( result2 + num + result.value)
  result.value = ""
  
  
}
function clearResult() {
  var result = document.getElementById("result");
  result.value = "";
  printHistory("");
}
function clearlastalpha() {
  var result = document.getElementById("result");
  console.log(result.value);
  result.value = result.value.slice(0, -1);
}

inputUser.addEventListener("keydown", (e) =>{
  if(e.key == "Enter"){
    // console.log("hello")
    getResult()
  }
})

function getResult() {
  var result = document.getElementById("result");
  var history = getHistory();
  result.value = eval(result.value);
  printHistory(result.value);
  // result.value=""
}
function clearResult1(){
  var result = document.getElementById("result");
  result.value = "";

}

