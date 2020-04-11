const divError = document.getElementById("showMessage");
const buttonSubmit = document.getElementById("submit");

let inputName = document.getElementById("name");
let selectBarber = document.getElementById("selectBarber");
let inputDate = document.getElementById("date");

const PHONE = "5491157013308";

let name;
let barberSelected;
let date;
let finalUrlMessage = `https://wa.me/${PHONE}?text=
						----------%0A*NAME*%0A----------%0A
						${name}%0A
						----------%0A*BARBER*%0A----------%0A
						${barberSelected}%0A
						----------%0A*DATE*%0A----------%0A
						${date}`;

inputName.addEventListener("keyup", () => {
	name = inputName.value;
});

selectBarber.addEventListener("change", () => {
	barberSelected = selectBarber.options[selectBarber.selectedIndex].value;
});

inputDate.addEventListener("change", () => {
	date = formatDate(inputDate.value);
});

buttonSubmit.addEventListener("click", (e) => {
	e.preventDefault();
	console.log(name, barberSelected, date);
	if (
		name === undefined ||
		name === null ||
		barberSelected === undefined ||
		barberSelected === null ||
		date === undefined ||
		date === null
	) {
		divError.style.opacity = "1";
		setTimeout(() => {
			divError.style.opacity = "0";
		}, 3300);
	} else {
		window.open(generateURL(PHONE, name, barberSelected, date));
	}
});

function generateURL(PHONE, name, barberSelected, date) {
	let finalUrlMessage = `https://wa.me/${PHONE}?text=
						----------%0A*NAME*%0A----------%0A
						${name}%0A
						----------%0A*BARBER*%0A----------%0A
						${barberSelected}%0A
						----------%0A*DATE*%0A----------%0A
						${date}`;
	return finalUrlMessage;
}

function formatDate(date) {
	return date.split("-").reverse().join("/");
}
