const generateIdButton=document.getElementById("generate-id")
const idList = document.getElementById('id-list');
const checkIdInput = document.getElementById('check-id');
const checkIdButton = document.getElementById('check-id-btn');
const result = document.getElementById('result');

function createId() {
  const id = 'ID-' + Math.floor(Math.random() * 1000000);
  let ids = localStorage.getItem('ids'); 
  if (!ids) {
    ids = []; 
  } else {
    ids = JSON.parse(ids); 
  }
  ids.push(id);
  localStorage.setItem('ids', JSON.stringify(ids)); 
  renderIds();
}

function renderIds() {
  const ids = JSON.parse(localStorage.getItem('ids')) || [];
  idList.innerHTML = ''; 
  for (let index = 0; index < ids.length; index++) {
    let id = ids[index];
    let li = document.createElement('li');
    li.textContent = `${index + 1}: ${id}`;
    idList.appendChild(li); 
  }
}

function checkId() {
  const inputId = checkIdInput.value.trim();
  const ids = JSON.parse(localStorage.getItem('ids')) || [];
  const index = ids.indexOf(inputId);
  if (index !== -1) {
    result.textContent = `ID already exists: ${inputId} (index: ${index})`;
    result.style.color = 'green';
  } else {
    result.textContent = "ID doesn't exist";
    result.style.color = 'red';
  }
}

// Updated event listeners
generateIdButton.addEventListener('click', createId);
checkIdButton.addEventListener('click', checkId);

renderIds();

