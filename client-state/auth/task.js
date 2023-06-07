let signinForm = document.getElementById("signin__form");
let useId = document.getElementById("user_id");
let welcome = document.getElementById("welcome");

signinForm.addEventListener("submit", (e) => {
e.preventDefault();

  let form = new FormData(signinForm);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.responseType = "json";
  xhr.send(form);

  xhr.onload = function () {
    let object = xhr.response;
    if (object.user_id) {
        useId.textContent = object.user_id;
      welcomeUser();
      localStorage.setItem("id", useId.textContent);
    } else {
      alert("Неверный логин и/или пароль");
    }
  };
  signinForm.reset();
});

window.onload = function() {
	let userId = localStorage.getItem('id');
	console.log(userId);

	if(userId) {
		useId.textContent = userId;
		welcomeUser();
	}
}

function welcomeUser() {
    signinForm.classList.add("welcome");
  welcome.classList.add("welcome_active");
}

