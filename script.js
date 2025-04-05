document.getElementById("myForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    if (name === "" || email === "") {
        event.preventDefault();
        alert("Please fill out all fields.");
    }
});
document.getElementById("animateButton").addEventListener("click", function() {
    var element = document.getElementById("animatedElement");
    element.style.animation = "bounce 1s ease";
    setTimeout(function() {
        element.style.animation = ""; 
    }, 1000);
});

document.getElementById("changeColorButton").addEventListener("click", function() {
 var element = document.getElementById("styledElement");
    element.style.color = "#ff0000";

})
function purchaseProduct(event){
    event.preventDefault()
    var email=
    event.target.querySelector('input[type="email"]').value;
    var phone=event.target.querySelector('input[type="tel"]');
    if(!email || !phone) {
    alert("please fill in aii fields");
    return; 
}
alert("Thank you for your purchase!\nEmail: " + email + "\nPhone: " 
+ phone);
event.target.reset();
}
function sendMessage (+254112801085){
window.location.href='sms:'+254112801085;
}