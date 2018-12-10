/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import { minify } from 'uglify-es';
import pkg from './package.json';

const env = process.env.NODE_ENV;

const plugins = [
  postcss(),
  babel({
    exclude: '**/node_modules/**'
  }),
  filesize(),
];

const globals = {
  react: 'React',
  redux: 'Redux',
  'prop-types': 'PropTypes',
  mousetrap: 'Mousetrap',
  'socket.io-client': 'io',
  flatted: 'Flatted',
};

export default [
  // Sub-packages.
  {
    input: 'index.js',
    external: Object.keys(globals),
    globals,
    output: { file: 'dist/index.js', format: 'umd' },
    name: 'Client',
    plugins,
  }
];
