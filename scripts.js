
document.querySelector("#contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const payload = {};
  //name, email, tel, message
  payload.name = document.querySelector("#name").value;
  payload.email = document.querySelector("#email").value;
  payload.tel = document.querySelector("#phone").value;
  payload.message = document.querySelector("#msg").value;

  fetch("https://fierce-brushlands-36860.herokuapp.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then(function (res) {
    console.log(res);
  });
});

