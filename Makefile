up: browsersync

browsersync:
	browser-sync start --server 'src' --files 'src'

bundle-sfx:
	jspm bundle-sfx ./src/app/index.jsx! ./bundle/app.js --minify

lint:
	jshint ./src/app/**.js

copy-index:
	cp ./src/index.html ./bundle/index.html

copy-assets:
	cp -r ./src/assets ./bundle/assets



