const burger = document.getElementById("burger");
const menuPrincipal = document.getElementById("menuPrincipal");


//console.dir(menuPrincipal.classList);

burger.onclick = function() {
    console.log("click confirmé");
    menuPrincipal.classList.toggle("transLeft");
};