import { forEach } from "lodash";

import dots from '../assets/images/dots.png'
import save from '../assets/images/save.jpeg';
import removeIcon from '../assets/images/delete.png';

class DoList {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

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
  }
}

const displayTask = () => {
  const existTask = JSON.parse(localStorage.getItem('dolist'));
  if (existTask !== null && existTask.length > 0 ) {
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
      checkbox.classList.add('checkbox');

      const input = document.createElement('input');
      input.type = 'text';
      input.classList.add('do-activity');
      input.id = `do-activity-${index}`;
      input.setAttribute('readonly', true);
      input.value = `${task.description}`;
      input.innerHTML = task.description;

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
  } else {
    document.querySelector('todo-list').innerHTML = '';
  }
}

// const editTask = (e) => {
//   const editItem = e.target;
//   const editBtn = document.getElementById(`${editItem.id}`);
//   const itemId = document.querySelector(`#do-activity-${editItem.id}`);
//   itemId.removeAttribute('readonly');
//   itemId.focus();

//   editBtn.style.display = 'none';
//   itemId.style.outlineColor = 'gray';

//   const taskList = document.querySelector(`#tasks-${editItem.id}`);
//   taskList.classList.add('active');

//   const singleTask = document.querySelector(`#task-${editItem.id}`);

//   const saveChange = document.createElement('img');
//   saveChange.setAttribute('src', save);
//   saveChange.classList.add(`save-${editItem.id}`);

//   singleTask.appendChild(saveChange);

//   const removeBtn = document.createElement('img');
//   removeBtn.classList.add(`remove-${editItem.id}`);
//   removeBtn.setAttribute('src', removeIcon);
//   singleTask.appendChild(removeBtn);

//   document.querySelectorAll(`.remove-${editItem.id}`).forEach((e) => {
//     e.addEventListener('click', removeTask);
//   });

//   document.querySelectorAll(`.save-${editItem.id}`).forEach((e) => {
//     e.addEventListener('click', saveTask);
//   });
// }

const removeTask = () => {

}

const saveTask = () => {

}

export { storeTask, displayTask };