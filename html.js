const form = document.getElementById("studentForm");
const tableBody = document.querySelector("#studentTable tbody");
const error = document.getElementById("error");

form.addEventListener("submit", function(event){

    event.preventDefault();
    error.innerHTML = "";

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let sid = document.getElementById("sid").value.trim();
    let email = document.getElementById("email").value.trim();
    let credit = document.getElementById("credit").value;
    let dept = document.getElementById("department").value;

    if(fname === ""){
        error.innerHTML = "First name cannot be empty.";
        return;
    }

    if(lname === ""){
        error.innerHTML = "Last name cannot be empty.";
        return;
    }

    if(!sid.includes("-")){
        error.innerHTML = "Student ID must contain '-'.";
        return;
    }

    if(!email.endsWith("@student.aiub.edu")){
        error.innerHTML = "Email must contain @student.aiub.edu";
        return;
    }

    if(credit === "" || credit < 0 || credit >= 148){
        error.innerHTML = "Credit must be between 0 and 147.";
        return;
    }

    if(dept === ""){
        error.innerHTML = "Please select a department.";
        return;
    }

    let row = tableBody.insertRow();

    row.insertCell(0).innerHTML = fname;
    row.insertCell(1).innerHTML = lname;
    row.insertCell(2).innerHTML = sid;
    row.insertCell(3).innerHTML = email;
    row.insertCell(4).innerHTML = credit;
    row.insertCell(5).innerHTML = dept;

    form.reset();
});