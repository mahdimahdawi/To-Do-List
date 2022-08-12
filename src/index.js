import 'lodash';
import './style.css';

import { storeTask, displayTask } from './list.js';

document.querySelector('.enter').addEventListener('click', storeTask);
document.querySelector('form').addEventListener('submit', storeTask);
window.addEventListener('load', displayTask);
