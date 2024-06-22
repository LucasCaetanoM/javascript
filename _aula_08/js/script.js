let px = 0;
let canto = 0;
function movimentaGreen() {

    if (px >= 600) {
        px = 600
    }
    else {
        px += 5;
    }
    document.getElementById("um").style.marginLeft = px + "px";
    document.getElementById("um").style.borderRadius = canto + "px";
    canto += 1;

    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
    document.getElementById("um").style.backgroundColor = (`#${r}${g}${b}`);
}

function relogio() {
    // referencia da biblioteca date
    let tempo = new Date();
    let hora = tempo.getHours();
    let minuto = tempo.getMinutes();
    let segundo = tempo.getSeconds();
    document.getElementById("dois").innerHTML = `${hora} : ${minuto} : ${segundo}`;
}

// window.setInterval(relogio,10)
// let tm = 1;
// let estado = "aumentar";
// const el = setInterval(() => {

//     if (tm >= 3) {
//         estado = "diminuir"
//     }
//     if (tm<=1) {
//         estado = "aumentar"
//     }
//     if (estado == "aumentar") {
//         tm += 0.1;
//     }
//     else {
//         tm -= 0.1
//     }

//     document.getElementById("tres").style.transform = `scale(${tm})`;

// }, 1000)

let pos = 0;
let direcao = "direita";
setInterval(() => {
    if (pos >= 1720) {
        direcao = "esquerda";
        document.getElementById("quatro").style.backgroundColor="red"
    }
    if (pos <= 1) {
        direcao = "direita"
        document.getElementById("quatro").style.backgroundColor="blue"
    }
    if (direcao == "direita") {
        pos += 50;
    }
    else {
        pos -= 50;
    }
    document.getElementById("quatro").style.left = pos + "px"
}, 105)