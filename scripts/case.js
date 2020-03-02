
console.log('INFO: Getting access to elements');

const inputElement1 = document.querySelector("#first");
const btnElement = document.getElementById("calcButton");
const ansElement = document.getElementById("answer");

console.log('INFO: Configuring event handlers');



btnElement.onclick = async function () {
  const text1 = inputElement1.value;  // values are text! 
  console.log("got here")
  const len = text1.length
  ansElement.innerHTML = "the length is " + len;
}


