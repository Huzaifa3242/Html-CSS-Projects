const input = document.getElementById("input");
const button = document.getElementById("button");
const ul = document.getElementById("list");

// Event listener for adding the task
button.addEventListener("click", () => {
    if (input.value == "") {
        alert("Please write something")
    } else {
        var list = document.createElement("li")
        list.innerHTML = input.value.trim()
        ul.appendChild(list)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        list.appendChild(span)
        spanEvent(span);
    }
    input.value = "";
    savedata();
})

// Event listener for the checked/unchecked
ul.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked');
        savedata();
    }
}, false)

// Function to add the event listener to the span
function spanEvent(span) {
    // Event listener for removing the task
    span.addEventListener("click", () => {
        span.parentElement.remove();
        savedata();
    })
}

// Saving data on localStorage
function savedata() {
    localStorage.setItem("data", ul.innerHTML)
}

// Getting data
function getdata() {
    ul.innerHTML = localStorage.getItem("data")
    const spans = ul.getElementsByTagName('span');
    for (let span of spans) {
        spanEvent(span);
    }
}

getdata();
//Moving cursor
const cursor=document.querySelector(".cursor")
document.body.addEventListener("mousemove",(e)=>{
    cursor.style.left =e.x + "px";
    cursor.style.top =e.y + "px";
})