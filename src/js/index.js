import '../css/index.scss';
import DPlayer from './player';

/* global DPLAYER_VERSION GIT_HASH */
console.log(`${'\n'} %c DPlayer v${DPLAYER_VERSION} ${GIT_HASH} %c http://dplayer.js.org ${'\n'}${'\n'}`, 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');

export default DPlayer;
