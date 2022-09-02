export default class Edit {
  constructor() {
    this.listArr = [
      {
        description: 'test',
      },
      {
        description: 'unchanged string',
      },
    ];
    this.editedText = 'unchanged string';
    this.previousText = 'unchanged string';
    this.editInput = 'string has been edited';
  }

  editFunction() {
    this.editedText = this.editInput.valueOf();

    for (let i = 0; i < this.listArr.length; i += 1) {
      if (this.listArr[i].description === this.previousText) {
        this.listArr[i].description = this.editedText;
      }
    }
    localStorage.setItem('task', JSON.stringify(this.listArr));
  }
};