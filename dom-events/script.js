var button = document.getElementById("enter");
var deletedElement = document.getElementsByClassName("delete");
var listElements = document.getElementsByClassName("entry");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


// Iterieren über deleted element array

for (var i = 0; i < deletedElement.length; i++) {
    deletedElement[i].addEventListener('click', deleteElement, false);
}

// Iterieren über deleted element array

for (var i = 0; i < listElements.length; i++) {
    listElements[i].addEventListener('click', toggle, false);
}


// Function to delete element

function deleteElement() {
	 this.parentNode.parentNode.removeChild(this.parentNode);
	//this.parentNode.removeChild(this);
	console.log(this.parentNode);
	console.log(this.parentNode);
}


// Function toggle

function toggle() {
	this.classList.toggle("done");
}


//

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.insertAdjacentHTML("beforeend", '<button class="delete">DELETE</button>');
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);