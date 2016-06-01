'use strict';

import compress from 'think-compress-html';

/**
 * 载入压缩html 中间件
 */
think.middleware('think-compress-html', compress);
