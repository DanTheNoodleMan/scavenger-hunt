//I know this is like the worst system every for a verification as you can literally see the passwords in developer tools but it serves its purpose for my goal.
//The purpose that it serves is that to have the same login screen to give the illusion of multiple pages and each password leading to a different page, achieving simplicity for a simple app where there is no private credentials shared.

let pass1 = "meeting";
let pass2 = "framed";
let pass3 = "smile";
let pass4 = "movie";

function passCheck() {
    let pass = document.getElementById("password").value;
    switch (pass) {
        case pass1:
            window.location.assign("spot1.html");
            break;
        case pass2:
            window.location.assign("spot2.html");
            break;
        case pass3:
            window.location.assign("spot3.html");
            break;
        case pass4:
            window.location.assign("spot4.html");
            break;
    }
    if (pass === password) {
    } else {
        alert("Wrong password");
        return;
    }
}

function revealAct1() {
    let box = document.querySelector(".btn");
    box.remove();

    const para = document.createElement("p");
    const tc = document.querySelector(".activity");
    para.innerHTML = "Picnic and Card Games! <br> (Get ready to lose at Speed)";
    tc.appendChild(para);
    para.classList.add("text-content");
}

function revealAct2() {
    let box = document.querySelector(".btn");
    box.remove();

    const para = document.createElement("p");
    const tc = document.querySelector(".activity");
    para.innerHTML = "Walking around undiscovered streets! <br> Me first: let's gooooo...<b>left</b>!";
    tc.appendChild(para);
    para.classList.add("text-content");
}

function revealCoord() {
    let box = document.querySelector(".btn");
    box.remove();

    const para = document.createElement("p");
    const tc = document.querySelector(".content-spot");
    para.innerHTML = "40.416383630206, -3.715378639491842";
    tc.appendChild(para);
    para.classList.add("text-content");
}
