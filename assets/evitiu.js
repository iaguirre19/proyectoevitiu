let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let icono = document.querySelector(".bxl-c-plus-plus");
let btn2 = document.querySelector("#btn2");


btn.onclick = function(){
    sidebar.classList.toggle("active"); /**Nos permite agregar una clase cuando se agrega una clase**/
}
btn2.onclick = function(){
    sidebar.classList.toggle("active");
}