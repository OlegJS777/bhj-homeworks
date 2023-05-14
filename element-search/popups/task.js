const modalMain = document.querySelector('#modal_main');
const modalSuccess = document.querySelector('#modal_success');
const showSuccess = document.querySelector('.show-success');
const close = document.querySelectorAll('.modal__close');

modalMain.classList.add('modal_active');

Array.from(close).forEach((btn) => {
    btn.onclick = () => {
        btn.closest('.modal').classList.remove('modal_active');
    }
});

showSuccess.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add("modal_active");
}