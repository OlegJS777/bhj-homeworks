let form = document.getElementById('form');
let progress = document.getElementById('progress');
let file = document.getElementById('file');

form.addEventListener('submit', (event) => {
    let form = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.upload.onprogress = function(event) {
        progress.value = (event.loaded / event.total).toFixed(1);
    };

    xhr.send(form);
    
    event.preventDefault();
});