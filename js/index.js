/*function prueba(){
  alert('Branch test');
}*/
//window.onload = prueba;
function sum (number1,number2){
  var number1 = parseFloat(document.getElementById("first_number").value);
  var number2 = parseFloat(document.getElementById("second_number").value);
  var result = number1 + number2
  return result
}

var P_elements = document.getElementsByTagName("p");

var second_paragraph = document.getElementById("second_paragraph");

var element = document.createElement("h2");
const content = document.createTextNode("Texto agregado desde un archivo de JavaScript");
element.appendChild(content);
element.setAttribute("align","center");
document.getElementById("subtitle").appendChild(element);
