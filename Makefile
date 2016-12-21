up: browsersync

browsersync:
	browser-sync start --server 'src' --files 'src'

bundle-sfx:
	jspm bundle-sfx ./src/components/app.js ./bundle/app.js --minify

copy-index:
	cp ./src/index.bundle.html ./bundle/index.html

copy-assets:
	cp -r ./src/assets ./bundle/assets
