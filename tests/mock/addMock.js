export default class add {
  constructor() {
    this.newTask = {};
    this.listArr = [];
    this.newListWrapper = document.createElement('li');
    this.newListContent = document.createElement('div');
    this.newListCheckbox = document.createElement('input');
    this.newListText = document.createElement('p');
  };

  addTask() {
    this.newTask.description = 'test';
    this.listArr.push(this.newTask);
    localStorage.setItem('task', JSON.stringify(this.listArr));

    this.newListWrapper.classList.add('list-wrapper');

    this.newListContent.classList.add('list-content');
    this.newListWrapper.appendChild(this.newListContent);

    this.newListCheckbox.type = 'checkbox';
    this.newListCheckbox.classList.add('checkbox');
    this.newListContent.appendChild(this.newListCheckbox);

    this.newListText.classList.add('list-text');
    this.newListText.innerHTML = this.newTask.description;
    this.newListContent.appendChild(this.newListText);
  };
}
/*
function addTask() {
  const newTask = {};
  const addInput = 'test';
  const listArr = [];
  newTask.description = 'test';
  newTask.completed = false;
  newTask.index = listArr.length + 1;
  listArr.push(newTask);
  localStorage.setItem('task', JSON.stringify(listArr));
  return listArr;
}
*/
/*export default addTask;*/

/*
function addTask() {
  const newTask = {};
  const addInput = 'test';
  const listArr = [];
  const list = document.querySelector('.list');
  newTask.description = 'test';
  newTask.completed = false;
  newTask.index = listArr.length + 1;
  listArr.push(newTask);
  localStorage.setItem('task', JSON.stringify(listArr));

  const newListWrapper = document.createElement('li');
  newListWrapper.classList.add('list-wrapper');
  list.appendChild(newListWrapper);

  const newListContent = document.createElement('div');
  newListContent.classList.add('list-content');
  newListWrapper.appendChild(newListContent);

  const newListCheckbox = document.createElement('input');
  newListCheckbox.type = 'checkbox';
  newListCheckbox.classList.add('checkbox');
  newListContent.appendChild(newListCheckbox);
  const newListText = document.createElement('p');
  newListText.classList.add('list-text');
  newListText.innerHTML = newTask.description;
  newListContent.appendChild(newListText);

  return listArr;
}*/