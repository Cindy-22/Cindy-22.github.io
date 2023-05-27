


function signup() {
    let signupParagraph = document.getElementById("signup");

    
    let nname = document.getElementById("nname").value;
    let email = document.getElementById("email").value;
    let spassword = document.getElementById("spassword").value;
    let cpassword = document.getElementById("cpassword").value;

    
    if (nname==="") {
        alert("Please enter a name.");
        return;
    }
    if (email==="") {
        alert("Please enter a valid email adress");
        return;
    }
    if (spassword==="") {
        alert("Please enter a password.");
        return;
    }
    if (cpassword!=spassword) {
        alert("Please confirm your password again.");
        return;
    }

    
    signupParagraph.innerHTML = "Welcome, " + nname + "!" + " You have successfully signed up!";
}
