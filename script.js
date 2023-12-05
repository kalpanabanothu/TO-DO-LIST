const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputbox.value === "") {
    alert("you must write something");
  } else {
    let li = document.createElement("li"); //create a variable;
    li.innerHTML = inputbox.value; // assign value to the variable;
    listContainer.appendChild(li); // add it to the list;
    let span = document.createElement("span"); // create a span for X ;
    span.innerHTML = "\u00d7"; // assign X to the sopan
    li.appendChild(span); // add to the list
  }
  inputbox.value = "";
  saveData();
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
