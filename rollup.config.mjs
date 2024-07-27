import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cleaner from 'rollup-plugin-cleaner';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import packageJson from './package.json' assert { type: 'json' };

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true
        }
    ],
    plugins: [
        cleaner({
            targets: ['./lib'],
        }),
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
            exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
        })
    ],
};
