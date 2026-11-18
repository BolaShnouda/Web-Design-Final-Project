// function loginUser() {
//   localStorage.setItem("loggedIn", "true");
//   window.location.href = "index.html"; 
// }

  document.querySelector('form').addEventListener('submit', function(event) {
    let emailInput = document.querySelector('input[type="email"]').value;
    let passwordInput = document.querySelector('input[type="password"]').value;

    if (passwordInput.length <= 6) {
      alert("Password must have More than 6 chars");
      event.preventDefault(); 
    }
    
  });

  var validator = document.querySelector('input[type="email"]').require("email-validator");
  validator.validate("test@email.com");