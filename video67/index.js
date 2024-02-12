console.log("Hello World");

console.log(document.body.childNodes)
console.log(document.body.childNodes[0])
console.log(document.body.childNodes[1].childNodes)
console.log(document.body.childNodes[1].childNodes[1]);
console.log(document.body.childNodes[1].childNodes[1].childNodes);


// Accessing the firstChild node in body

let cont = document.body.childNodes[1]
console.log(cont.firstChild)
console.log(cont.lastChild)

console.log(cont.firstElementChild)
console.log(cont.lastElementChild)
cont.style.color = "red";
cont.lastElementChild.style.backgroundColor = "gold"

// Getting the parent element of the lastElementCild

console.log(cont.lastElementChild.parentElement);

console.log(document.body.firstElementChild.childNodes)

console.log(document.body.firstElementChild.children)
console.log(document.body.firstElementChild.children[0])
console.log(document.body.firstElementChild.children[1])
console.log(document.body.firstElementChild.children[2])
console.log(document.body.firstElementChild.children[3])


console.log(document.body.firstElementChild.children[3].previousElementSibling)
console.log(document.body.firstElementChild.children[1].nextElementSibling)

let contChildren = cont.children
console.log(contChildren) // cont.children returns an HTMLCollection so array methods won't work on the HTML collection. It needs to be converted to an array using Array.from(iterableObject) in order for array methods to work

// HTML collections are iterable using for of loop
for(let element of contChildren)
{
    console.log(element)
}

// table Navigation

// Fetching all the rows in the table
const t = document.getElementsByClassName("student-details")[0]
let tRows = t.rows
console.log(tRows)

// Fetching the table table caption
let tCaption = t.caption
console.log(tCaption)
let tHead = t.tHead
console.log(tHead)

let tBody = t.tBodies
console.log(tBody)

console.log(t.rows[0].cells)
console.log(t.rows[1].cells)
console.log(t.rows[2].cells)
console.log(t.rows[3].cells)
console.log(t.rows[4].cells)
console.log(t.rows[5].cells)