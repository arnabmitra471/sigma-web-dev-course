let boxes = document.getElementsByClassName("box")
console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("box3").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green"

console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(element=>{
    element.style.backgroundColor = "lime";
})


// Get elements by tag name

let allDivs = document.getElementsByTagName("div");
console.log(allDivs)

for(let element of allDivs)
{
    console.log(element)
}