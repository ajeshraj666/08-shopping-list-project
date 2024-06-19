const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  if (newItem === "") {
    alert("Please add an item");
    return;
  }
  //create list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  // creating using function
  const button = createButton("remove-item btn-link text-red");
  // Adding button into li
  li.appendChild(button);
  // Adding li into ul
  itemList.appendChild(li);

  newItem = ''
  console.log(ul);
}

// creating using function
function createButton(classses) {
  const button = document.createElement("button");
  button.className = classses;

  const icon = createIcon("fa-solid fa-xmark");
  // Adding icon into button
  button.appendChild(icon);
  return button;
}

function createIcon(classses) {
  const icon = document.createElement("i");
  icon.className = classses;
  return icon;
}

itemForm.addEventListener("submit", addItem);
