import './style.css';
import refresh from '../img/refresh.png';
import enter from '../img/enter.png';
import more from '../img/more.png';

const header = document.querySelector('.header');
const addBar = document.querySelector('.add-bar');
const list = document.querySelector('.list');

const refreshIcon = new Image();
const enterIcon = new Image();
refreshIcon.src = refresh;
enterIcon.src = enter;
refreshIcon.classList.add('refresh-icon');
enterIcon.classList.add('enter-icon');

header.appendChild(refreshIcon);
addBar.appendChild(enterIcon);

const listArr = [
  {
  description: 'Finish To Do list project',
  completed: false,
  index: 3
  },
  {
  description: 'Wash the dishes',
  completed: true,
  index: 1
  },
  {
  description: 'Do the laundry',
  completed: false,
  index: 2
  }
];

const listWrapperArr = [];
const listContentArr = [];
const listImgArr = [];
const listCheckboxArr = [];
const listTextArr = [];

function displayList () {
  listArr.sort(function (x, y) {
    return x.index - y.index;
  });
  for (let i = 0; i < listArr.length; i += 1) {
    listWrapperArr[i] = document.createElement('li');
    listWrapperArr[i].classList.add('list-wrapper');
    list.appendChild(listWrapperArr[i]);

    listContentArr[i] = document.createElement('div');
    listContentArr[i].classList.add('list-content');
    listWrapperArr[i].appendChild(listContentArr[i]);
    listImgArr[i] = document.createElement('img');
    listImgArr[i].src = more;
    listImgArr[i].classList.add('more-icon');
    listWrapperArr[i].appendChild(listImgArr[i]);

    listCheckboxArr[i] = document.createElement('input');
    listCheckboxArr[i].type = "checkbox";
    listCheckboxArr[i].classList.add('checkbox');
    listContentArr[i].appendChild(listCheckboxArr[i]);
    listTextArr[i] = document.createElement('p');
    listTextArr[i].classList.add('list-text');
    listTextArr[i].innerHTML = listArr[i].description;
    listContentArr[i].appendChild(listTextArr[i]);
  };
};

displayList();