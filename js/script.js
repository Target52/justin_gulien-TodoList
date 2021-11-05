const addTasksToDom = async () => {
    const tasks = await getTasks();
    const parent = document.getElementById("tasks");
    parent.innerHTML = '';
    tasks.forEach(item => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("taskdiv")
        const newDivLeft = document.createElement("div");
        newDivLeft.classList.add("leftdiv")
        const newDivCenter = document.createElement("div");
        newDivCenter.classList.add("centerdiv")
        const newDivRight = document.createElement("div");
        newDivRight.classList.add("rightdiv")
        newCheckBox = document.createElement("input");
        newCheckBox.setAttribute("type", "checkbox");
        newCheckBox.setAttribute("class", "checkbox");
        newCheckBox.setAttribute("id", item._id);
        if (item.done) {
            newCheckBox.checked = true;
            newDivCenter.style.textDecoration = 'line-through';
        }
        newCheckBox.addEventListener('change', function () {
            if (this.checked) {
                putTask(item._id, { 'done': true });
                newDivCenter.style.textDecoration = 'line-through';
            } else {
                putTask(item._id, { 'done': false });
                newDivCenter.style.textDecoration = '';
            }
        });
        newTrashButton = document.createElement("img");
        newTrashButton.src = "img/trash.png";
        newTrashButton.setAttribute("class", "trashcan");
        newTrashButton.setAttribute("id", item._id);
        newTrashButton.addEventListener("click", function () {
            deleteTask(item._id);
            addTasksToDom();
        })
        newDivLeft.appendChild(newCheckBox);
        newDivCenter.appendChild(document.createTextNode(item.description));
        newDivRight.appendChild(newTrashButton);
        const divs = [newDivLeft, newDivCenter, newDivRight];
        divs.forEach(item => {
            newDiv.appendChild(item);
        })
        parent.append(newDiv);
        newDivCenter.addEventListener('click', (ev) => {
            let field = ev.target;
            field.contentEditable = field.contentEditable === true ? false : true;
        });

    })
}

const newTask = () => {
    postTask({ 'description': input.value, 'done': false });
    document.getElementById('ntaak').value = '';
    addTasksToDom();
}

const input = document.getElementById('ntaak');

document
    .querySelector(".addbutton").addEventListener("click", newTask);

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        if (!input.value == '') {
            event.preventDefault();
            document.getElementById("addbutton").click();
        }
    }
});

addTasksToDom();