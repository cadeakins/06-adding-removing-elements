//Select the form and the list elements
const form = document.querySelector('#form');
const list = document.querySelector('#list'); 

//Add an event listener to the form
form.addEventListener('submit', function(event) {
  //prevent the default form submission
  event.preventDefault();

  //Get the value of the input field
  const input = document.querySelector('#item-input');
  const newItemText = input.value;

  //Create a new list item
  const newItem = document.createElement('li');
  newItem.textContent = newItemText;


  //Create a delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"</i>';

  //Add an event listener to the delete button
  deleteButton.addEventListener('click', function() {
    //Remove the list item when the delete button is clicked
    list.removeChild(newItem);
  });

  newItem.appendChild(deleteButton); //Append the delete button to the new item

  list.appendChild(newItem);

  input.value = ''; //Clear the input field

});