export const MakeComplete = (e) => {
  const eventId = e.target.id;
  const findId = eventId.split('-');
  const id = parseInt(findId[1], 10);
  const inputText = document.querySelector(`#activity-${id}`);
  const getData = JSON.parse(localStorage.getItem('dolist'));
  if(e.target.checked) {
    getData[id].completed = true;
    inputText.style.textDecorationLine = 'line-through';
    inputText.setAttribute('readonly', true);
    localStorage.setItem('dolist', JSON.stringify(getData));
  } else {
    getData[id].completed = false;
    inputText.style.textDecorationLine = 'none';
    localStorage.setItem('dolist', JSON.stringify(getData));
  }
};