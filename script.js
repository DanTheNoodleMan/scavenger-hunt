//I know this is like the worst system every for a verification as you can literally see the passwords in developer tools but it serves its purpose for my goal.
//The purpose that it serves is that to have the same login screen to give the illusion of multiple pages and each password leading to a different page, achieving simplicity for a simple app where there is no private credentials shared.

let password = "meeting";

function passCheck(){
    let pass = document.getElementById("password").value;
    if (pass === password){
        window.location.assign("spot1.html");
        alert("Success");
    } else{
        alert("Wrong password");
        return;
    }
}

function revealCoord(){
    let box = document.querySelector(".btn");
    box.remove();

    const para = document.createElement("p");
    const tc = document.querySelector(".content-spot")
    para.innerHTML = "40.416383630206, -3.715378639491842";
    tc.appendChild(para);
    para.classList.add("text-content");
}