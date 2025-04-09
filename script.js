var list = document.getElementById("list");
var input = document.getElementById("inp");
var editingElement = null;
function add(){
    if(input.value.trim() === "") return;

    if(editingElement){
        editingElement.firstChild.textContent = input.value + " ";
        editingElement = null;
    } else {
        list.innerHTML += `<p class="item">
            ${input.value} 
            <button class="remove" onclick="this.parentNode.remove()">Remove</button>
            <span class="Edit" onclick="edit(this)"><i class="fa-solid fa-pencil"></i></span>
        </p><br>`;
    }

    input.value = "";
    input.focus();
}
function cl(){
    list.innerHTML = ""
    input.value = ""
    input.focus()
    alert("List cleared!")
}
    function edit(e){
        editingElement = e.parentNode;
        input.value = editingElement.firstChild.textContent.trim();
        input.focus();
     }
     

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        add();
    }
});
input.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        cl();
    }
});
alert("Press Enter to add an item to the list.\nPress Escape to clear the list.")
input.focus()