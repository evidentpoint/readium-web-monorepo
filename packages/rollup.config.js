import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import sourcemaps from 'rollup-plugin-sourcemaps'
import babel from '@rollup/plugin-babel'

const plugins = [
  resolve(),
  commonjs(),
  sourcemaps(),
  babel({
    babelrc: false,
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            chrome: '49',
          },
        },
      ],
    ],
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
