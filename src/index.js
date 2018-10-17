require.context('./img', true);
require.context('./fonts', true);
require.context('./', true, /\w*\.html$/);

import './less/main.less';
import './js/main.js';
