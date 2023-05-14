const menuLinks = Array.from(document.querySelectorAll('.menu__link'));
const menuItem = document.querySelectorAll('.menu__item');


for (let i = 0; i < menuLinks.length; i++) {
  const link = menuLinks[i];
  const item = link.closest('.menu__item');
  const subMenu = item.querySelector('.menu_sub');
  link.onclick = function () {
    if (subMenu && subMenu.className.includes("menu_active")) {
      subMenu.className = "menu menu_sub";
      return false;
    }
    if (subMenu) {
      subMenu.className = "menu menu_sub menu_active";
      return false;
    }
  };
}