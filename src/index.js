import 'lodash';
import './style.css';
import { ClearCompleted } from '../modules/clearComplete.js';
import { displayTask, storeTask } from './list.js';

document.querySelector('.enter').addEventListener('click', storeTask);
document.querySelector('form').addEventListener('submit', storeTask);
document.querySelector('.clear-all').addEventListener('click', ClearCompleted);
window.addEventListener('load', displayTask);
