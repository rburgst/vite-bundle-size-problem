Problem showing bundling issues with vite >= 2.6

With `vite 2.5.10`:

```bash
yarn build
yarn run v1.22.18
$ tsc && vite build
vite v2.5.10 building for production...
transforming (1) src/index.tsUse of eval is strongly discouraged, as it poses security risks and may cause issues with minification
Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification
Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification
✓ 11 modules transformed.
dist/vite-bundle-size-problem.es.js   2147.03 KiB / brotli: skipped (large chunk)
dist/vite-bundle-size-problem.umd.js   2147.39 KiB / brotli: skipped (large chunk)
✨  Done in 14.95s.
```

With `vite 2.9.8`

```bash
vite v2.9.8 building for production...
transforming (1) src/index.tsUse of eval is strongly discouraged, as it poses security risks and may cause issues with minification
Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification
Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification
✓ 11 modules transformed.
dist/vite-bundle-size-problem.es.js   3211.96 KiB / gzip: 737.04 KiB
```

Note that

a) the build does not complete (at least not within 5 minutes or so).
b) the ES output file is now `3211.96 KiB` compared to `2147.03 KiB`

## Repro steps

0. run `yarn install`
1. run `yarn build` (by default we use `vite 2.9.8`) note that the build does not terminate and the output file is 3MB
2. change `package.json` and replace ` "vite": "~2.9.8"` with ` "vite": "~2.5.10"`
3. run `yarn install && yarn build` and observe the file size is now only 2 MB
