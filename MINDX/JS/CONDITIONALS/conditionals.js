let buttonCheck = document.getElementById("button_check");
buttonCheck.addEventListener ("click", function(){
    let T_input = document.getElementById("T");
    let T = Number(T_input.value);
    console.log(T);
    if (T < 15) {
        console.log("Cold")
    }
    else if (T < 25) {
        console.log("Not cold")
    }
    else {
        console.log("Hot")
    }
}
)