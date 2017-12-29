// Function For Login          
function login(){
    var username = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
            
    if (username == "admin@mail.com" && password == "admin"){
        alert("Login Berhasil"),
        window.open('home.html');
    }
    else{
        alert("Username atau password anda salah!");
    }
}

function cancel(){
    window.location = "index.html";
}

// // Function Button To Top //
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("myBtn").style.display = "block";
//     } else {
//         document.getElementById("myBtn").style.display = "none";
//     }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }
// // End Function Buttom //