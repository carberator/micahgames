// window.onload = function() {
//     var password = prompt("Please enter the password to view this page:", "");
    
//     if (password != "yourpassword") {  // Replace "yourpassword" with your desired password
//         alert("Incorrect password. You will be redirected to another page.");
//         window.location.href = "https://www.google.com"; // This redirects to Google, but you can redirect to any other URL
//     }
    
//     if (password == "yourpassword") {
//         document.body.style.display = "block";
//     }
    
    
// }


// window.onload = function() {
//     var password = prompt("Please enter the password to view this page:", "");
    
//     if (password == "yourpassword") {  // Replace "yourpassword" with your desired password
//         document.body.style.display = "block";
//         document.getElementById("beforePasswordImage").style.display = "none";
//         document.getElementById("afterPasswordImage").style.display = "block";
//     } else {
//         alert("Incorrect password. You will be redirected to another page.");
//         window.location.href = "https://www.google.com"; // This redirects to Google, but you can redirect to any other URL
//     }
// }
window.onload = function() {
    var password = prompt("Please enter the password to view this page:", "");
    
    if (password == "yourpassword") {  // Replace "yourpassword" with your desired password
        document.body.style.display = "block";
        document.getElementById("beforePasswordImage").style.display = "none";
        document.getElementById("afterPasswordImage").style.display = "block";
        document.getElementById("gamesList").style.display = "block"; // Display the games list
    } else {
        alert("Incorrect password. You will be redirected to another page.");
        window.location.href = "https://www.google.com";
    }
}
