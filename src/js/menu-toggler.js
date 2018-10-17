export default (menu, menuTogglerBtn) => {

    menuTogglerBtn.addEventListener('click', () => {
        menu.classList.toggle('is-visible');
        (menu.classList.contains('is-visible')) ? menuTogglerBtn.textContent = 'Скрыть меню' : menuTogglerBtn.textContent = 'Показать меню';
    });

};