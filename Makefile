up: browsersync

browsersync:
	browser-sync start --server 'src' --files 'src'

bundle-sfx:
	jspm bundle-sfx ./src/components/index.jsx! ./bundle/app.js --minify

copy-index:
	cp ./src/index.html ./bundle/index.html

copy-assets:
	cp -r ./src/assets ./bundle/assets

jshint:
	node ./bin/run-jshint-worker

sass:
	node ./bin/run-sass-worker



