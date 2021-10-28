const btn = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];
const darkModClass = "dark-mode";

btn.addEventListener("click",changeMode);

function changeMode(){
    changeClasses();
    changeTexts();
}

function changeTexts(){
    if(body.classList.contains(darkModClass)){
        btn.innerHTML = "Light Mode";
        h1.innerHTML = "Dark Mode ON";
    } else {
        btn.innerHTML = "Dark Mode";
        h1.innerHTML = "Light Mode ON";
    }
}

function changeClasses(){
    btn.classList.toggle(darkModClass);
    h1.classList.toggle(darkModClass);
    body.classList.toggle(darkModClass);
    footer.classList.toggle(darkModClass);
}