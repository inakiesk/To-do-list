import Add from './mock/addMock.js';
import Remove from './mock/removeMock.js';
import Edit from './mock/editMock.js';
import Status from './mock/statusMock.js';
import Clear from './mock/clearAllMock.js';

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
    const NewList = new Add();
    NewList.addTask();
    /* Add test */
    expect(
      NewList.listArr,
    ).toHaveLength(1);

    /* local storage add check */
    const obtainedInfo = JSON.parse(localStorage.getItem('task'));
    expect(
      obtainedInfo,
    ).not.toBe(null);
    expect(localStorage).toHaveLength(1);
  });

  test('Removing a task', () => {
    const RemoveList = new Remove();
    RemoveList.removeFunction();
    /* remove test */
    expect(
      RemoveList.listArr,
    ).toHaveLength(1);
    /* local storage remove check */
    expect(localStorage).toHaveLength(1);
  });

  test('Editing a task', () => {
    const editList = new Edit();
    localStorage.setItem('task', JSON.stringify(editList.listArr));
    const oldLocal = JSON.parse(localStorage.getItem('task'));
    editList.editFunction();
    const newLocal = JSON.parse(localStorage.getItem('task'));
    /* edit test */
    expect(
      editList.listArr[1].description,
    ).toEqual('string has been edited');
    /* local storage edit check */
    expect(
      oldLocal,
    ).not.toEqual(newLocal);
  });

  test('Updating completed status in a task', () => {
    const statusList = new Status();
    localStorage.setItem('task', JSON.stringify(statusList.listArr));
    const oldLocal = JSON.parse(localStorage.getItem('task'));
    statusList.status();
    const newLocal = JSON.parse(localStorage.getItem('task'));
    /* Status check test */
    expect(
      statusList.listArr[1].completed,
    ).toEqual(true);
    /* Local storage status change check */
    expect(
      oldLocal,
    ).not.toEqual(newLocal);
  });

  test('Clearing all completed elements', () => {
    const clearList = new Clear();
    localStorage.setItem('task', JSON.stringify(clearList.listArr));
    const oldLocal = JSON.parse(localStorage.getItem('task'));
    clearList.clearAll();
    const newLocal = JSON.parse(localStorage.getItem('task'));
    expect(
      clearList.listArr,
    ).toHaveLength(1);
    expect(
      oldLocal,
    ).not.toEqual(newLocal);
  });
});
