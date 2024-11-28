document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let password = document.querySelector('input[name="password"]').value;
    let fbLink = document.querySelector('input[name="fbLink"]').value;

    let table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = email;
    newRow.insertCell(2).textContent = password;
    newRow.insertCell(3).textContent = fbLink;

    document.getElementById('userForm').reset();
});