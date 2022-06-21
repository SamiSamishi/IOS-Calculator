// const btn = document.getElementById("calculatrice");

// console.log({ btn })

// btn.style.backgroundColor = 'green';

// const log = () => {
//     btn.style.backgroundColor = 'green';
// }

// const add = (a, b) => {
//     return a + b;
// }
// const add2 = (a, b) => {
//     a + b;
// }

// const truc = add(1, 3)
// const machin = add2(1, 3)

// console.log('truc', truc)
// console.log('machin', machin)

//btn.addEventListener('click', log);
const resultat = document.querySelector("#resultat .content");
const buttons = document.getElementsByClassName("button");

let operateur;
let valeur = 0;
let doitEffacer = false;

// resultat.innerText = "COUCOU"
// resultat.innerText = "TRUC"
// resultat.innerText += "TRUC"


const nombres = document.getElementsByClassName('nombre');

function onClickNombres(e) {
    if (doitEffacer === true) {
        resultat.innerText = e.target.innerText;
        doitEffacer = false;
    } else {
        resultat.innerText += e.target.innerText;
    }
}

for (let i = 0; i < nombres.length; i++) {
    nombres[i].addEventListener('click', onClickNombres);
}

const operateurs = document.getElementsByClassName('operateur');

function onClickOperateurs(e) {
    if (valeur === 0) {
        valeur = Number(resultat.innerText);
        operateur = e.target.innerText;
    } else {
        if (operateur === "+") {
            valeur += Number(resultat.innerText);
        }
        if (operateur === "-") {
            valeur -= Number(resultat.innerText);
        }

        if (operateur === "x") {
            valeur *= Number(resultat.innerText);
        }

        if (operateur === "/") {
            valeur /= Number(resultat.innerText);
        }
        resultat.innerText = valeur;

        if (e.target.innerText === '=') {
            operateur = undefined;
            valeur = 0;
        } else {
            operateur = e.target.innerText;
        }

    }

    doitEffacer = true;
}

for (let i = 0; i < operateurs.length; i++) {
    operateurs[i].addEventListener('click', onClickOperateurs);
}
const effacer = document.getElementById('effacer');

function onClickEffacer() {
    resultat.innerText = 0;
    operateur = undefined;
    valeur = 0;
    doitEffacer = true;
}
effacer.addEventListener('click', onClickEffacer);


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => console.log({ e, operateur, valeur, doitEffacer }));
}


console.log({ resultat, buttons })