let tasksAdd = document.getElementById("tasks__add");
let input = document.querySelector("input");
let tasksList = document.querySelector(".tasks__list");

function addTask(event) {
  event.preventDefault();
    input.value = input.value.trim();
if(input.value == "") {
    return;
  }

tasksList.insertAdjacentHTML('afterbegin',`<div class="task">
    <div class="task__title">
        ${input.value}
            </div>
<a href="#" class="task__remove">&times;</a>
</div>`);

input.value = null;

let deletetasksAdd = document.querySelector(".task__remove");
  deletetasksAdd.addEventListener("click", () => {
    deletetasksAdd.closest(".task").remove();
  })
}

tasksAdd.onclick = addTask;
    input.addEventListener((item) => {
        if(item.code == "Enter") {
            addTask();
  }
})