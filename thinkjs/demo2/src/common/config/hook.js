'use strict';

/**
 * hook config
 * https://thinkjs.org/doc/middleware.html#toc-df6
 * append 之前compress
 */
export default {
  view_parse: ['append', 'think-compress-html']
}
