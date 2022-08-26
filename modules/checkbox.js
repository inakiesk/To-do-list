import listArr from '../src/index.js';

function checkbox() {
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
      }
      else {
        for (let i = 0; i < listArr.length; i += 1) {
          if (listArr[i].description === e.target.nextSibling.innerHTML) {
            listArr[i].completed = false;
          }
        }
        localStorage.setItem('task', JSON.stringify(listArr));
      }
    }
  })
};

export default checkbox;