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
