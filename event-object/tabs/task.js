let tab =document.querySelectorAll(".tab");
let tabContent = document.querySelectorAll(".tab__content")
for(let i = 0; i< tab.length; i++){
    let element = tab[i];
    let cont = tabContent[i];
    element.addEventListener('click',function(){
        document.querySelector(".tab_active").classList.remove("tab_active")
        element.classList.add("tab_active");
        document.querySelector(".tab__content_active").classList.remove("tab__content_active")
        cont.classList.add("tab__content_active")

    })
}