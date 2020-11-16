import {terser} from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'

export default {
    input: 'index.js',
    output: [
        {
            file: 'dist/bundle.esm.js',
            format: 'es',
            plugins: [terser()]
        },
        {
            file: 'dist/bundle.cjs.js',
            format: 'cjs',
            plugins: [terser()]
        },
        {
            file: 'dist/bundle.min.js',
            format: 'iife',
            name: 'OKEI',
            plugins: [terser()]
        }
    ],
    plugins: [babel({ babelHelpers: 'bundled' })]
};
