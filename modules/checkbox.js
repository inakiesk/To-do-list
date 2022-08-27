function checkbox() {
  const x = document.getElementsByClassName('list')[0];
  x.addEventListener('click', (e) => {
    if (e.target.classList.contains('checkbox')) {
      if (e.target.checked) {
        e.target.nextSibling.classList.add('overline');
      } else {
        e.target.nextSibling.classList.remove('overline');
      }
    }
  });
}

export default checkbox;