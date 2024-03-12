let btn = document.getElementById("btn")

btn.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML = "<strong>Yay you were clicked !</strong> Enjoy your click !!"
})
btn.addEventListener("contextmenu",()=>{
   alert("Don't hack us by right click please")
})

document.addEventListener("keydown",e=>{
    console.log(e.key)
})
let nameInp = document.getElementById("fname");

// nameInp.addEventListener("keydown",(e)=>{
//     alert("A key has been pressed down")
// })

nameInp.addEventListener("change",(e)=>{
    document.getElementById("result").innerHTML = "The input element has been changed"
})