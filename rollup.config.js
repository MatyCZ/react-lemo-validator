import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

import packageJson from './package.json';

const globals = {
    'validator': 'Validator',
};

export default {
    input: './src/index.js',
    external: Object.keys(packageJson.dependencies),
    output: [
        {
            file: 'lib/lemo-validator.es.js',
            format: 'es',
            globals: globals,
            sourcemap: true,
        },
        {
            file: 'lib/lemo-validator.umd.js',
            format: 'umd',
            globals: globals,
            name: 'LemoObject',
            sourcemap: true,
        },
    ],
    plugins: [
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [
                '@babel/preset-env',
                '@babel/preset-react'
            ],
        }),
        resolve(),
        commonjs()
    ]
};