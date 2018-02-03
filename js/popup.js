var contlink = document.querySelector(".btn-contacts");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal-close");

var form = popup.querySelector("form");
var userName = popup.querySelector("[name=user-name]");
var userMail = popup.querySelector("[name=user-email]");

	contlink.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	userName.focus();
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
	if (!userName.value || !userMail.value) {
		evt.preventDefault();
		popup.classList.add("modal-error");
		console.log("Введіть дані");
	}
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
		}
	}
});