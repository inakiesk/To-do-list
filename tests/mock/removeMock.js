export default class Remove {
  constructor() {
    this.listArr = [
      {
        description: 'test',
      },
      {
        description: 'Hello',
      },
    ];
    this.removing = 'test';
  }

  removeFunction() {
    for (let i = 0; i < this.listArr.length; i += 1) {
      if (this.listArr[i].description === this.removing) {
        this.listArr.splice([i], 1);
        for (let i = 0; i < this.listArr.length; i += 1) {
          this.listArr[i].index = parseFloat([i]) + 1;
        }
        localStorage.setItem('task', JSON.stringify(this.listArr));
      }
    }
  }
}