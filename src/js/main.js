import './uikit';
import menuToggler from './menu-toggler';

const menuTogglerBtn = document.querySelector('.js-menu-toggler');
const menu = document.querySelector('.js-menu');

menuToggler(menu, menuTogglerBtn);