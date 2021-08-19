function add() {
const list = document.querySelector(".list");
const li = document.createElement("li");
const btn = document.createElement("button")
let text = document.querySelector("input").value;
btn.innerHTML = "x"
li.textContent = text;
btn.setAttribute("class", "delete")   
li.appendChild(btn);
if (text === "") {
    alert("Please Enter An Item")
} else {
    list.insertBefore(li, list.lastChild)
};
btn.addEventListener("click",function(){
    li.parentNode.removeChild(li);
}, false);

}

