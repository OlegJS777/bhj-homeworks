let tab = document.querySelectorAll(".tab");
let tabContent = document.querySelectorAll(".tab__content")
for(let i = 0; i< tab.length; i++){
    let tabDoc = tab[i];
    let content = tabContent[i];
    tabDoc.addEventListener('click',function(){
        document.querySelector(".tab_active").classList.remove("tab_active")
            tabDoc.classList.add("tab_active");
                document.querySelector(".tab__content_active").classList.remove("tab__content_active")
                    content.classList.add("tab__content_active")

    })
}