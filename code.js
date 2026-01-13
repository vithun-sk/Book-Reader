var a = document.querySelector(".popup_overlay")
var b = document.querySelector(".bookdetails")
var btn = document.querySelector(".addbtn")
function add() {
    a.style.display = "block"
    b.style.display = "block"
}
function cancel() {
    a.style.display = "none"
    b.style.display = "none"
}
var container = document.querySelector(".content")

function addbookdetails(event) {
 
    if (!bookname.value || !authorname.value || !bookdescription.value) {
        alert("Fill the details")
    }
    else {
        var c = document.querySelector(".bookscontent")
        var div = document.createElement("div")
        event.preventDefault()
        div.setAttribute("class", "bookscontent")
        div.innerHTML = `<h2>${bookname.value}</h2>
    <h3>${authorname.value}</h3>
    <p> ${bookdescription.value}</p>
     <button class="bookdelete"  onclick="deletedetails(event)">Delete</button>`
        container.append(div)
        a.style.display = "none"
        b.style.display = "none"
        bookname.value = ""
        authorname.value = ""
        bookdescription.value = ""
    }
}
function deletedetails(event) {
    event.target.parentElement.remove()
}