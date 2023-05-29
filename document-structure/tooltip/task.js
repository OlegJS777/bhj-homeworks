let hasTooltips = Array.from(document.querySelectorAll(".has-tooltip"));

hasTooltips.forEach(element => {
    element.insertAdjacentHTML('afterEnd', `<div class = 'tooltip' style = ''> ${element.getAttribute('title')} </div>`);

    element.addEventListener('click', (e) => {
        e.preventDefault();
        let tooltips = element.nextSibling;
        tooltips.classList.toggle('tooltip_active');
        let positionTooltip = element.getBoundingClientRect();
        tooltips.style.left = positionTooltip.left + 'px';
        tooltips.style.top = positionTooltip.bottom + 'px';
    });
});