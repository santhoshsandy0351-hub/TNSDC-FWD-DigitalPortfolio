document.getElementById("contactForm").addEventListener("submit", function(event) {

  event.preventDefault(); // stop page refresh

  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  let message = document.getElementById("message").value;

  if (name && email && message) {

    document.getElementById("response").innerText = 

      "Thank you, " + name + "! Your message has been sent.";

    document.getElementById("contactForm").reset();

  } else {

    document.getElementById("response").innerText = 

      "Please fill out all fields.";

  }

});