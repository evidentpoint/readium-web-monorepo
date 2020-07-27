import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import sourcemaps from 'rollup-plugin-sourcemaps'
import babel from '@rollup/plugin-babel'

const plugins = [
  resolve(),
  commonjs(),
  sourcemaps(),
  babel({
    babelHelpers: 'runtime',
  }),
]

export default [
  {
    input: 'example/lib/index.js',
    output: {
      name: 'readium_example',
      file: 'example/dist/bundle.js',
      format: 'umd',
      sourcemap: true,
    },
    plugins,
  },
]
