document.getElementById("studentForm").addEventListener("submit", function(event){

    event.preventDefault();

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let sid = document.getElementById("sid").value.trim();
    let email = document.getElementById("email").value.trim();
    let credit = document.getElementById("credit").value;
    let dept = document.getElementById("department").value;

    // Validation

    if(fname==""){
        alert("First Name cannot be empty.");
        return;
    }

    if(lname==""){
        alert("Last Name cannot be empty.");
        return;
    }

    if(!sid.includes("-")){
        alert("Student ID must contain '-'.");
        return;
    }

    if(!email.includes("@student.aiub.edu")){
        alert("Email must contain @student.aiub.edu");
        return;
    }

    if(credit=="" || credit<0 || credit>=148){
        alert("Credit Completed must be between 0 and 147.");
        return;
    }

    if(dept==""){
        alert("Please select a department.");
        return;
    }

    // Add Student to Table

    let table = document.getElementById("studentTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = fname;
    row.insertCell(1).innerHTML = lname;
    row.insertCell(2).innerHTML = sid;
    row.insertCell(3).innerHTML = email;
    row.insertCell(4).innerHTML = credit;
    row.insertCell(5).innerHTML = dept;

    alert("Registration Successful!");

    document.getElementById("studentForm").reset();

});