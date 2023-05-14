const clicker__counter = document.getElementById('clicker__counter')
const img = document.getElementById('cookie')
const clicker__timer = document.getElementById('clicker__timer')

timeLastClick = 0

img.onclick = () => {
    if(clicker__counter.textContent % 2 == 0) {
        img.width = 200;
        clicker__counter.textContent = Number(clicker__counter.textContent) + 1;
        
    }
    else if(clicker__counter.textContent % 2 != 0) {
        img.width = 220;
        clicker__counter.textContent = Number(clicker__counter.textContent) + 1;
        
    }
}