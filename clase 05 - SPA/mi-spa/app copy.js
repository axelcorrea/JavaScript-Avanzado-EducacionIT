import { router } from './utils/router.js';

window.addEventListener('hashchange', router);
window.addEventListener('load', router);