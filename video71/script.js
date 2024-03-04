let elem = document.querySelector(".box");
console.log(elem);

console.log(elem.innerHTML);

let contHTML = document.querySelector(".container").innerHTML;
console.log(contHTML);

let contText = document.querySelector(".container").innerText;
console.log(contText)

let fullContHTML = document.querySelector(".container").outerHTML;
console.log(fullContHTML)

let elementName = document.querySelector(".container").tagName;
console.log(elementName);

let commentNode = document.querySelector(".container").childNodes[1];
console.log(commentNode);
console.log(commentNode.nodeName)

let elemTxt = document.querySelector(".container").textContent;
console.log(elemTxt);

console.log(document.querySelector(".container").hidden);

document.querySelector(".container").hidden = true;

console.log(document.querySelector(".container").hidden);

document.querySelector(".container").hidden = false;

console.log(document.querySelector(".container").hidden);

// Methods to manipualte attributes of an element

document.getElementById("box1").setAttribute("style","color: #2d396a")
console.log(document.getElementById("box1").getAttribute("style"));

document.getElementById("box2").setAttribute("style","border: 2px solid lime")

console.log(document.getElementById("box2").attributes)
console.log(document.getElementById("box2").hasAttribute("style"))