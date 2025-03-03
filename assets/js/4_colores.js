div1 = document.querySelector("#div1")
div2 = document.querySelector("#div2")
div3 = document.querySelector("#div3")
div4 = document.querySelector("#div4")
function pintar (event){
    event.target.style.backgroundColor = "black"
}
divKey = document.querySelector("#key")
document.addEventListener("keydown", function (event){
    let color
    if (event.key ==="a") {
        color = "pink"
    }
    else if(event.key === "s"){
        color = "orange"
    }
    else if(event.key == "d"){
        color = "lightBlue"
    }
    else {
        color = "white"
    }
    divKey.style.backgroundColor = color
})
function crearDiv (id){
    caja = document.createElement("div")
    caja.id = id
    body = document.body
    body.appendChild(caja)
}

document.addEventListener("keydown", function (event){
    if (event.key === "q"){
        crearDiv("morado")
        divM = document.getElementById("morado")
        divM.style.backgroundColor = "purple"
    }
    else if (event.key === "w"){
        crearDiv("gris")
        divG = document.getElementById("gris")
        divG.style.backgroundColor = "grey"
    }
    else if (event.key === "e"){
        crearDiv("cafe")
        divC = document.getElementById("cafe")
        divC.style.backgroundColor = "brown"
    }
    else{
        
    }
})








div1.addEventListener("click", pintar)
div2.addEventListener("click", pintar)
div3.addEventListener("click", pintar)
div4.addEventListener("click", pintar)
