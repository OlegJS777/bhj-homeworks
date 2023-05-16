let dropdownList = document.querySelector(".dropdown__list")
let dropdownValue = document.querySelector(".dropdown__value")
let dropdownLink = document.querySelectorAll(".dropdown__link")

function press(){
    if(document.querySelector(".dropdown__list_active") === null){
        dropdownList.classList.add("dropdown__list_active");
    }else{
        dropdownList.classList.remove("dropdown__list_active");
    }
}

dropdownValue.addEventListener('click',press)
function change(input){
    console.log(input);
        dropdownValue.textContent = input;
            dropdownList.classList.remove("dropdown__list_active");
}

for(let i = 0; i < dropdownLink.length; i++){
    dropdownLink[i].href = "#";
        dropdownLink[i].addEventListener('click',change.bind(null, dropdownLink[i].textContent),false);
    }