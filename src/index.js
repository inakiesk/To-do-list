import './style.css';
import refresh from '../img/refresh.png';
import enter from '../img/enter.png';

const header = document.querySelector('.header');
const addBar = document.querySelector('.add-bar');

const refreshIcon = new Image();
const enterIcon = new Image();
refreshIcon.src = refresh;
enterIcon.src = enter;
refreshIcon.classList.add('refresh-icon');
enterIcon.classList.add('enter-icon');

header.appendChild(refreshIcon);
addBar.appendChild(enterIcon);