for(let i=0; i < 4; i++) {
    console.log("hello");
    console.log(i)
};
let buttons = document.getElementsByTagName('button');
for(let i=0; i < 3; i++) {
    if (i % 2 == 0) {
        buttons[i].style.backgroundColor = "turquoise";
    }
    
}