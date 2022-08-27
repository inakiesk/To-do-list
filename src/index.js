import './style.css';
import refresh from '../img/refresh.png';
import enter from '../img/enter.png';
import more from '../img/more.png';
import trash from '../img/trash.png';
import checkbox from '../modules/checkbox.js';

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

let listArr = [];

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

    if (listArr[i].completed === true) {
      listCheckboxArr[i].checked = true;
      listTextArr[i].classList.add('overline');
    }

    listArr[i].index = parseFloat([i]) + 1;
  }
  localStorage.setItem('task', JSON.stringify(listArr));
}

function localCheck() {
  if (!localStorage.getItem('task')) {
    localStorage.setItem('task', JSON.stringify(taskInfo));
  }
}

function getInfo() {
  const obtainedInfo = JSON.parse(localStorage.getItem('task'));
  for (let i = 0; i < obtainedInfo.length; i += 1) {
    listArr.push(obtainedInfo[i]);
  }
}

function addTask() {
  addInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      if (addInput.value !== '') {
        const newTask = {};
        newTask.description = addInput.value;
        newTask.completed = false;
        newTask.index = listArr.length + 1;
        listArr.push(newTask);
        localStorage.setItem('task', JSON.stringify(listArr));
        addInput.value = '';

        const newListWrapper = document.createElement('li');
        newListWrapper.classList.add('list-wrapper');
        list.appendChild(newListWrapper);

        const newListContent = document.createElement('div');
        newListContent.classList.add('list-content');
        newListWrapper.appendChild(newListContent);
        const newListImg = document.createElement('div');
        newListImg.classList.add('list-images');
        newListWrapper.appendChild(newListImg);

        const newListMore = document.createElement('img');
        newListMore.src = more;
        newListMore.classList.add('more-icon');
        newListImg.appendChild(newListMore);
        const newListTrash = document.createElement('img');
        newListTrash.src = trash;
        newListTrash.classList.add('trash');
        newListImg.appendChild(newListTrash);

        const newListCheckbox = document.createElement('input');
        newListCheckbox.type = 'checkbox';
        newListCheckbox.classList.add('checkbox');
        newListContent.appendChild(newListCheckbox);
        const newListText = document.createElement('p');
        newListText.classList.add('list-text');
        newListText.innerHTML = newTask.description;
        newListContent.appendChild(newListText);
      }
    }
  });
}

function removeFunction() {
  const x = document.getElementsByClassName('list')[0];
  x.addEventListener('click', (e) => {
    if (e.target.src === trash) {
      const removing = e.target.parentElement.parentElement.firstChild.firstChild.nextSibling;
      for (let i = 0; i < listArr.length; i += 1) {
        if (listArr[i].description === removing.innerHTML) {
          listArr.splice([i], 1);
          for (let i = 0; i < listArr.length; i += 1) {
            listArr[i].index = parseFloat([i]) + 1;
          }
          localStorage.setItem('task', JSON.stringify(listArr));
        }
      }
      e.target.parentElement.parentElement.remove();
    }
  });
}

function editFunction() {
  list.addEventListener('click', (y) => {
    if (y.target.src === more) {
      const editedText = y.target.parentElement.parentElement.firstChild.lastChild;
      const previousText = editedText.innerHTML;
      const editedBox = y.target.parentElement.parentElement.firstChild.firstChild;
      const editedImg = y.target;
      editedText.classList.toggle('hidden');
      editedBox.classList.toggle('hidden');
      editedImg.classList.toggle('hidden');

      const editInput = document.createElement('input');
      editInput.type = 'text';
      editInput.placeholder = 'Add to your list...';
      editInput.classList.add('edit-input');
      editInput.value = editedText.innerHTML;
      y.target.parentElement.parentElement.firstChild.appendChild(editInput);

      editInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          if (editInput.value !== '') {
            editedText.innerHTML = editInput.value;
            editInput.remove();
            editedText.classList.toggle('hidden');
            editedBox.classList.toggle('hidden');
            editedImg.classList.toggle('hidden');
            for (let i = 0; i < listArr.length; i += 1) {
              if (listArr[i].description === previousText) {
                listArr[i].description = editedText.innerHTML;
              }
            }
            localStorage.setItem('task', JSON.stringify(listArr));
          }
        }
      });
    }
  });
}

function status() {
  const x = document.getElementsByClassName('list')[0];
  x.addEventListener('click', (e) => {
    if (e.target.classList.contains('checkbox')) {
      if (e.target.checked) {
        for (let i = 0; i < listArr.length; i += 1) {
          if (listArr[i].description === e.target.nextSibling.innerHTML) {
            listArr[i].completed = true;
          }
        }
        localStorage.setItem('task', JSON.stringify(listArr));
      } else {
        for (let i = 0; i < listArr.length; i += 1) {
          if (listArr[i].description === e.target.nextSibling.innerHTML) {
            listArr[i].completed = false;
          }
        }
        localStorage.setItem('task', JSON.stringify(listArr));
      }
    }
  });
}

function clearAll() {
  const clear = document.querySelector('.clear-text');
  clear.addEventListener('click', () => {
    listArr = listArr.filter((x) => x.completed === false);
    list.innerHTML = '';
    displayList();
  });
}

localCheck();
getInfo();
displayList();
addTask();
removeFunction();
editFunction();
status();
checkbox();
clearAll();