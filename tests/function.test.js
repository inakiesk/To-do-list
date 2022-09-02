import add from './mock/addMock.js';
import remove from './mock/removeMock.js';

document.body.innerHTML = `
<div class="wrapper">
  <div class="header">
    <h2 class="header-text">Today's To Do</h2>
  </div>
  <div class="add-bar">
    <label class="hidden" for="add-input">Add to your list...</label>
    <input class="add-bar-text" type="text" id="add-input" name="add-input" placeholder="Add to your list..." maxlength="30"/>
  </div>
  <ul class="list"></ul>
  <div class="clear">
    <button type="button" class="clear-text">Clear all completed</button>
  </div>
</div>
`;

describe('Testing', () => {
  test('adding a task', () => {
    const newList = new add();
    newList.addTask();
    /*Add test*/
    expect(
      newList.listArr
      ).toHaveLength(1);
    
    /*local storage add check*/
    const obtainedInfo = JSON.parse(localStorage.getItem('task'));
    expect(
      obtainedInfo
    ).not.toBe(null);
    expect(localStorage).toHaveLength(1);
  });
  
  test('Removing a task', () => {
    const removeList = new remove();
    removeList.removeFunction();
    /*remove test*/
    expect(
      removeList.listArr
    ).toHaveLength(1);
    /*local storage remove check*/
    expect(localStorage).toHaveLength(1);
  });
});
