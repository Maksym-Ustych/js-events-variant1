const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

const form = document.getElementById("userForm");


nameInput.addEventListener("input", function(){

if(nameInput.value.length < 3){

nameError.textContent = "Мінімум 3 символи";
nameError.className = "error";

}
else{

nameError.textContent = "OK";
nameError.className = "ok";

}

});


emailInput.addEventListener("input", function(){

if(!emailInput.value.includes("@")){

emailError.textContent = "Невірний email";
emailError.className = "error";

}
else{

emailError.textContent = "OK";
emailError.className = "ok";

}

});


form.addEventListener("submit", function(event){

event.preventDefault();

alert("Форма відправлена!");

});


const searchInput = document.getElementById("search");
const list = document.getElementById("studentList");
const students = list.getElementsByTagName("li");


searchInput.addEventListener("input", function(){

let filter = searchInput.value.toLowerCase();

for(let i = 0; i < students.length; i++){

let text = students[i].textContent.toLowerCase();

if(text.includes(filter)){
students[i].style.display = "block";
}
else{
students[i].style.display = "none";
}

}

});