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