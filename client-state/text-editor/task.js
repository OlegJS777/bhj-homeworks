let edit = document.getElementById("editor")


edit.addEventListener("input", () => {
    localStorage.setItem("key", edit.value)

})

edit.value = localStorage.getItem("key")