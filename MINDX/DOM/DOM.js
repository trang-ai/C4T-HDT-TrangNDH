// DOM find //
let btn = document.getElementById("b");
console.log(btn);

// DOM listen -"click","keyup"//
btn.addEventListener("click", function () {alert("Hello JS05")}
)

let box = document.getElementById("box");
box.addEventListener("keyup", function (e) {
    console.log(e.target.value)}
)
// DOM change
let buttonColor = document.getElementById("color");
buttonColor.addEventListener("click", function(){
    let change = document.getElementById("change_color");
    change.style.backgroundColor = "orange";
    change.textContent = "Hola";
    change.style.textAlign = "center"
    
}

)