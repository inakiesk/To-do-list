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