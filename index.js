/**
 * @Author: CHC
 * @Date:   2017-07-24T14:14:59+08:00
 * @Email:  chenhuachaoxyz@gmail.com
 * @Filename: index.js
 * @Last modified by:   Angus.Fenying
 * @Last modified time: 2018-01-17T16:22:12+08:00
 * @License: MIT
 * @Copyright: 2017
 */

'use strict';
var renderer = require('./lib/renderer');

hexo.extend.renderer.register('md', 'html', renderer, true);
hexo.extend.renderer.register('markdown', 'html', renderer, true);
hexo.extend.renderer.register('mkd', 'html', renderer, true);
hexo.extend.renderer.register('mkdn', 'html', renderer, true);
hexo.extend.renderer.register('mdwn', 'html', renderer, true);
hexo.extend.renderer.register('mdtxt', 'html', renderer, true);
hexo.extend.renderer.register('mdtext', 'html', renderer, true);

hexo.extend.filter.unregister(
    'before_post_render',
    require('hexo/lib/plugins/filter/before_post_render/backtick_code_block')
);
