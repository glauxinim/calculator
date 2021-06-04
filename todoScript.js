function addText() {
  if (document.getElementById("textInput").value !== "") {
    let textInputValue = document.getElementById("textInput").value;

    let newTodoItem = document.createElement("p");
    newTodoItem.innerHTML = textInputValue;
    document.getElementById("list").appendChild(newTodoItem);

    document.getElementById("textInput").value = "";
  }
}

function removeList() {
  document.getElementById("list").innerHTML = "";
}
