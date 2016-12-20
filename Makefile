start:
	browser-sync start --server 'src' --files 'src'

bundle:
	jspm bundle-sfx ./src/app/index.jsx! ./dist/socian-dashboard.js --minify

build: bundle



