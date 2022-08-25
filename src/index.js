import './style.css';
import refresh from '../img/refresh.png';
import enter from '../img/enter.png';
import more from '../img/more.png';
import trash from '../img/trash.png';

const header = document.querySelector('.header');
const addBar = document.querySelector('.add-bar');
const list = document.querySelector('.list');
const addInput = document.querySelector('.add-bar-text');

const refreshIcon = new Image();
const enterIcon = new Image();
refreshIcon.src = refresh;
enterIcon.src = enter;
refreshIcon.classList.add('refresh-icon');
enterIcon.classList.add('enter-icon');

header.appendChild(refreshIcon);
addBar.appendChild(enterIcon);

const listArr = [];

const listWrapperArr = [];
const listContentArr = [];
const listImgArr = [];
const listMoreArr = [];
const listTrashArr = [];
const listCheckboxArr = [];
const listTextArr = [];
const taskInfo = [];

function displayList() {
  listArr.sort((x, y) => (
    x.index - y.index
  ));
  for (let i = 0; i < listArr.length; i += 1) {
    listWrapperArr[i] = document.createElement('li');
    listWrapperArr[i].classList.add('list-wrapper');
    list.appendChild(listWrapperArr[i]);

    listContentArr[i] = document.createElement('div');
    listContentArr[i].classList.add('list-content');
    listWrapperArr[i].appendChild(listContentArr[i]);
    listImgArr[i] = document.createElement('div');
    listImgArr[i].classList.add('list-images');
    listWrapperArr[i].appendChild(listImgArr[i]);

    listMoreArr[i] = document.createElement('img');
    listMoreArr[i].src = more;
    listMoreArr[i].classList.add('more-icon');
    listImgArr[i].appendChild(listMoreArr[i]);
    listTrashArr[i] = document.createElement('img');
    listTrashArr[i].src = trash;
    listTrashArr[i].classList.add('trash');
    listImgArr[i].appendChild(listTrashArr[i]);

    listCheckboxArr[i] = document.createElement('input');
    listCheckboxArr[i].type = 'checkbox';
    listCheckboxArr[i].classList.add('checkbox');
    listContentArr[i].appendChild(listCheckboxArr[i]);
    listTextArr[i] = document.createElement('p');
    listTextArr[i].classList.add('list-text');
    listTextArr[i].innerHTML = listArr[i].description;
    listContentArr[i].appendChild(listTextArr[i]);

    listArr[i].index = parseFloat([i]) + 1;
  }
  localStorage.setItem('task', JSON.stringify(listArr));
}

function localCheck() {
  if (!localStorage.getItem('task')) {
    localStorage.setItem('task', JSON.stringify(taskInfo));
  }
};

function getInfo() {
  const obtainedInfo = JSON.parse(localStorage.getItem('task'));
    for (let i = 0; i < obtainedInfo.length; i += 1) {
      listArr.push(obtainedInfo[i]);
    }
}

function addTask() {
  addInput.addEventListener("keypress", (event)=> {
    if (event.keyCode === 13) {
      if (addInput.value !== '') {
        const newTask = {};
        newTask.description = addInput.value;
        newTask.completed = false;
        newTask.index = listArr.length + 1;
        listArr.push(newTask);
        localStorage.setItem('task', JSON.stringify(listArr));
        addInput.value = '';
        list.textContent = '';
        displayList();
      }
    }
  });
}

function removeFunction() {
  const x = document.getElementsByClassName('list')[0];
  x.addEventListener('click', (e) => {
    if (e.target.src === trash) {
      const removing = e.target.parentElement.parentElement.firstChild.lastChild.innerHTML;
      for (let i = 0; i < listArr.length; i += 1) {
        if (listArr[i].description === removing ) {
          listArr.splice([i], 1);
          localStorage.setItem('task', JSON.stringify(listArr));
        };
      };
      list.textContent = '';
      displayList();
    }
  });
}

localCheck();
getInfo();
displayList();
addTask();
removeFunction();