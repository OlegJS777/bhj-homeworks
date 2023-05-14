const timer = document.getElementById("timer");

const timerId = setInterval(() => {
    timer.textContent = timer.textContent - 1;;
    if (timer.textContent == 0) {
        alert("Вы победили в конкурсе!");
      clearInterval (timerId)
    }
    
}, 1000)