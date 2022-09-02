export default class Status {
  constructor() {
    this.listArr = [
      {
        description: 'test',
        completed: true,
        checked: true
      },
      {
        description: 'checked test',
        completed: false,
        checked: true
      },
    ];

  }

  status() {
    for (let i = 0; i < this.listArr.length; i += 1) {
      if (this.listArr[i].description === 'checked test') {
        this.listArr[i].completed = true;
      }
    }
    localStorage.setItem('task', JSON.stringify(this.listArr));
  }

}


/*
function status() {
  for (let i = 0; i < listArr.length; i += 1) {
    if (listArr[i].description === 'checked test') {
      listArr[i].completed = true;
    }
  }
  localStorage.setItem('task', JSON.stringify(listArr));
}*/