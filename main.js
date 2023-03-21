let a = "";
let b = "";
let sign = "";
let finish = false;

const buttonsCalc = ["0","1","2","3","4","5","6","7","8","9","."]
const action = ["-", "+", "X", "/"];

const output = document.querySelector(".calculator-screen p");

function aClear() {
    a = "";
    b = "";
    sign = "";
    finish = false;
    output.textContent = 0;
}

document.querySelector(".ac").addEventListener('click', aClear)

document.querySelector('.buttons').addEventListener('click', pressButton);

document.querySelector(".plus-minus").addEventListener('click', function () {
    alert("Comming soon...")
})
document.querySelector(".percent").addEventListener('click', function () {
    alert("Comming soon...")
})
function pressButton(e) {
    if (!e.target.classList.contains("btn")) return;
    if (e.target.classList.contains("ac")) return;

    output.textContent = "";

    const key = e.target.textContent;

    if (buttonsCalc.includes(key)){
        if (b === "" && sign === "") {
            a = a + key;
            console.log(a, b, sign);
            output.innerHTML = a;
        }
        else if (a !== "" && b !== "" && finish) {
            b = key;
            finish = false;
            output.innerHTML = b;
        }
        else {
            b = b + key;
            output.innerHTML = b;
        }
        return;
    }
    if (action.includes(key)){
        sign = key;
        console.log(a, b, sign);
        output.innerHTML = sign;
        return;
    }
    if (key === "=") {
        if (b === "") {
            b = a;
        }
        switch (sign) {
            case "+":
                a = Number(a) + Number(b);
                break;
            case "-":
                a = Number(a) - Number(b);
                break;
            case "X":
                a = Number(a) * Number(b);
                break;
            case "/":
                if (b === "0") {
                    output.textContent = "Oops...";
                    a = "";
                    b = "";
                    sign = "";
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        output.innerHTML = a;
    }
}


// document.querySelector(".ac").addEventListener("click", aClear);
//
// document.querySelector(".buttons").addEventListener("click", pressButton);
//
// function pressButton(e) {
//     if (!e.target.classList.contains("btn")) return;
//     if (e.target.classList.contains("ac")) return;
//
//     output.textContent  = "";
//
//     const key = e.target.textContent ;
//     if (buttonsCalc.includes(key)) {
//         a +=  key;
//         console.log(a, b, sign);
//         output.textContent = a;
//     }
// }

