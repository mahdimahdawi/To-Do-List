/* eslint-disable */
import { displayTask } from "../src/list.js";

export const ClearCompleted = () => {
  const checkedItem = document.querySelectorAll('input:checked');
  let getData = JSON.parse(localStorage.getItem('dolist'));
  if (checkedItem) {
    checkedItem.forEach((item) => {
      const inputText = item.parentNode;
      inputText.parentNode.remove();
    });
  }
  getData = getData.filter((i) => i.completed === false);
  getData.forEach((item, i) => {
    (item.index = i + 1);
  });
  localStorage.setItem('dolist', JSON.stringify(getData));
  displayTask();
};