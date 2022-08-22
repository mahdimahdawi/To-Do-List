import 'lodash';
import './style.css';
import { ClearCompleted } from '../modules/clearComplete.js';
import { displayTask, storeTask } from './list.js';



const enterBtn = document.querySelector('.enter');
enterBtn && enterBtn.addEventListener('click', storeTask);
const formBtn = document.querySelector('form');
enterBtn && formBtn.addEventListener('submit', storeTask);
document.querySelector('.clear-all').addEventListener('click', ClearCompleted);
window.addEventListener('load', displayTask);
