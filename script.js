let button = document.querySelector("#btn");
let div = document.getElementById("main-container");
let text = document.getElementById("textContent");
let btn = document.getElementById("textContent");


button.addEventListener("click", function(){
    let rgb1 = Math.floor(Math.random() *255);
    let rgb2 = Math.floor(Math.random() *255);
    let rgb3 = Math.floor(Math.random() *255);
    div.style.backgroundColor=`rgb(${rgb1},${rgb2},${rgb3})`;
    btn.innerText = `rgb(${rgb1}, ${rgb2}, ${rgb3})`
});