let loader = document.querySelector(".loader");
let items = document.getElementById("items");
loader.classList.add("loader_active");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();


xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == xhr.DONE) {
        let data = JSON.parse(xhr.response).response.Valute;
        loader.classList.remove("loader_active");
        for (let key in data) {
            items.insertAdjacentHTML("beforeend", ` <div class="item">
            <div class="item__code">
                ${data[key].CharCode}
            </div>         
            <div class="item__value">
                ${data[key].Value}       
            </div>`)
        }
    }
});