function addBirthDate() {
	let tag = document.createElement("h3");
	tag.id = "date-years";
	let text = document.createTextNode("10-11-2004");
	let element = document.getElementById("birthdate");
	tag.appendChild(text);
	element.appendChild(tag);
	document.getElementById("birthdate").addEventListener("mouseover", birthToYears);
	document.getElementById("birthdate").addEventListener("mouseout", handleMouseOut);
}

function birthToYears() {
	let currentTime = new Date();
	let vv = document.getElementById("date-years");
	let year = currentTime.getFullYear()
	let numYears = Number(year) - Number(vv.innerHTML.slice(-4));
	vv.innerHTML = "Vârsta: " + numYears;
}

function handleMouseOut() {
		document.getElementById("date-years").innerHTML = "27-10-2004";
	}

function createEmailTextBox() {
	let input = document.createElement("input");
	input.type = "email";
	input.id = "email-box";
	input.value = "abc@xyz.com";
	input.addEventListener("mouseover", validateEmail);
	document.getElementById("email").appendChild(input);
}

function validateEmail() {
	let input = document.getElementById("email-box");
  	let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  	if (input.value.match(validRegex)) {
  		console.log("Valid email address!");

  	} else {
    	alert("Invalid email address!");
  	}
}