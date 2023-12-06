function verify() {
    console.log("x, y, z")
    let x = parseInt(elementX.value);
    let y = parseInt(elementY.value);
    let z = parseInt(elementZ.value);
    console.log(x, y, z)

    if (x > y) {
        result = x*y
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    } else {
        result =  Math.log(x+y)
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = false;
    }
}
function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;

const elementX = document.getElementById("x");
elementX.addEventListener('input', verify);

const elementY = document.getElementById("y");
elementY.addEventListener('input', verify);

const elementZ = document.getElementById("result");
elementZ.addEventListener('click',verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', verify_send)

