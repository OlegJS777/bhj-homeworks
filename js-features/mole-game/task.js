const hit = document.getElementById("dead");
const mis = document.getElementById("lost");

for (let index = 1; index < 10; index++) {
    function getHole(index) {
        const clickForHole = document.getElementById(`hole${index}`);
        return clickForHole;
    }
    let hole = getHole(index);

    hole.onclick = () => {
        if (hole.className.includes( "hole_has-mole" ) === true) {
            dead.textContent = Number(dead.textContent) + 1
        } else {
            lost.textContent = Number(lost.textContent) + 1
        }
        if (dead.textContent == 10) {
            alert("Победа");
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (lost.textContent == 5) {
            alert("В следующий раз повезет");
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}