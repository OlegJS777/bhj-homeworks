let interests = document.querySelectorAll(".interest__check");

for (let child of interests){
    child.addEventListener("change", () => {
        let parents = child.closest(".interest").querySelectorAll(".interest__check");
             if (child.checked){
                  for (let subItem of parents) {
                     subItem.checked = true;
            }
          } else if (!child.checked){
                  for (let subItem of parents) {
                      subItem.checked = false;
            }
        }
    }
    );
}