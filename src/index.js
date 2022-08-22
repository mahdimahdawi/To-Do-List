import 'lodash';
import './style.css';
import { ClearCompleted } from '../modules/clearComplete.js';
import { displayTask } from './list.js';

document.querySelector('.clear-all').addEventListener('click', ClearCompleted);
window.addEventListener('load', displayTask);
