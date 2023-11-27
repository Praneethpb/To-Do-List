// Creating required variables
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


// addTask button function
function addTask() {
    if(inputBox.value === '') {
        alert('Please enter a tas\k');
    }
    else {
        // inserting tasks below INPUT BOX
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
                listContainer.appendChild(li);

        // inserting delete icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        // displaying the span
        li.appendChild(span);

    }

    // after clicking 'add', the content of input text area should become empty
    inputBox.value = "";
    saveData();
}

// adding checked functionality and delete functionality
listContainer.addEventListener("click", function(e) {

    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


// the data should be stored in local storage and displayed even when website closes / reloads
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// display
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


