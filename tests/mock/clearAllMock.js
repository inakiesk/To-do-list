export default class ClearAll {
  constructor() {
    this.listArr = [
      {
        description: 'test',
        completed: true,
      },
      {
        description: 'test2',
        completed: false,
      },
      {
        description: 'test3',
        completed: true,
      },
    ];
  }

  clearAll() {
    this.listArr = this.listArr.filter((x) => x.completed === false);
    localStorage.setItem('task', JSON.stringify(this.listArr));
  }
}
