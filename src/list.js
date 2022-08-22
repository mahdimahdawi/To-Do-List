/* eslint-disable */
import 'lodash';
import dots from '../assets/images/dots.png';
import removeIcon from '../assets/images/delete.png';
import { MakeComplete } from '../modules/makeComplete.js';

class DoList {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
// Remove Function
function removeTask(e) {
  const itemClass = e.target.className;
  const itemId = itemClass.split('-');
  const id = parseInt(itemId[1], 10);
  let getData = JSON.parse(localStorage.getItem('dolist'));
  getData = getData.filter((task, index) => index !== id);
  e.target.parentNode.remove();
  getData.forEach((task, i) => task.index = i + 1);
  localStorage.setItem('dolist', JSON.stringify(getData));
  displayTask();
};
// Update Function
const UpdateTask = (e) => {
  const taskid = e.target.id;
  const itemId = taskid.split('-');
  const id = parseInt(itemId[1], 10);
  const getData = JSON.parse(localStorage.getItem('dolist'));
  const input = document.querySelector(`#activity-${id}`);
  getData[id].description = input.value;
  localStorage.setItem('dolist', JSON.stringify(getData));
  displayTask();
};
// Edit function
const editTask = (e) => {
  const editItem = e.target;
  const editBtn = document.getElementById(`${editItem.id}`);
  const itemId = document.querySelector(`#activity-${editItem.id}`);
  itemId.classList.add(`activity-${editItem.id}`);
  itemId.id = `activity-${editItem.id}`;
  itemId.removeAttribute('readonly');
  itemId.focus();
  const bgColor = document.querySelector(`#task-${e.target.id}`)
  bgColor.style.backgroundColor = 'rgb(235, 235, 235)';
  editBtn.style.display = 'none';
  itemId.style.outlineColor = 'white';
  itemId.style.backgroundColor = 'rgb(235, 235, 235)';
  const inputFeild = document.querySelector('.item');
  inputFeild.style.border = 'none';
  const taskList = document.querySelector(`#tasks-${editItem.id}`);
  taskList.classList.add('active');
  const singleTask = document.querySelector(`#task-${editItem.id}`);
  const removeBtn = document.createElement('img');
  removeBtn.classList.add(`remove-${editItem.id}`);
  removeBtn.id = 'remove-btn';
  removeBtn.setAttribute('src', removeIcon);
  removeBtn.style.marginLeft = '80px';
  singleTask.appendChild(removeBtn);
  document.querySelectorAll(`.remove-${editItem.id}`).forEach((e) => {
    e.addEventListener('click', removeTask);
  });
  document.querySelectorAll(`#activity-${editItem.id}`).forEach((e) => {
    e.addEventListener('change', UpdateTask);
  });
};
// Fetech Data from local Storage and dispaly them
const displayTask = () => {
  const existTask = JSON.parse(localStorage.getItem('dolist'));
  if (existTask !== null && existTask.length > 0) {
    const taskList = document.querySelector('.todo-list');
    taskList.innerHTML = '';

    existTask.forEach((task, index) => {
      const unorder = document.createElement('ul');
      const order = document.createElement('li');
      order.classList.add('activity-list');
      const line = document.createElement('hr');
      unorder.classList.add('tasks');
      unorder.id = `tasks-${index}`;
      order.classList.add('task');
      order.id = `task-${index}`;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('check-box');
      checkbox.id = `box-${index}`;
      const input = document.createElement('input');
      if (task.completed) {
        checkbox.checked = true;
        input.style.textDecorationLine = 'line-through';
      }
      input.type = 'text';
      input.classList.add('item');
      input.id = `activity-${index}`;
      input.setAttribute('readonly', true);
      input.value = `${task.description}`;
      const editIcon = document.createElement('img');
      editIcon.setAttribute('src', dots);
      editIcon.classList.add('btn-edit');
      editIcon.id = index;
      taskList.appendChild(unorder);
      taskList.appendChild(line);
      unorder.appendChild(order);
      order.appendChild(checkbox);
      order.appendChild(input);
      order.appendChild(editIcon);
    });
    document.querySelectorAll('.btn-edit').forEach((e) => {
      e.addEventListener('click', editTask);
    });
    document.querySelectorAll('.check-box').forEach((e) => {
      e.addEventListener('change', MakeComplete);
    })
  }
};

// Store Data in Local Storage
const storeTask = (e) => {
  e.preventDefault();
  let existTask = JSON.parse(localStorage.getItem('dolist'));
  existTask = existTask === null ? [] : existTask;

  const inputList = document.querySelector('.input').value;
  const newTask = new DoList(inputList, false, existTask.length + 1);

  if (inputList !== '') {
    existTask.push(newTask);
    localStorage.setItem('dolist', JSON.stringify(existTask));
    document.querySelector('.input').value = '';
    displayTask();
  }
};

export { storeTask, displayTask };