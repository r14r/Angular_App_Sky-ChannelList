default:
	cat Makefile


browser:
	cd ..
	npm run build
	rm -rf       cordova/www
	mv dist/app* cordova/www
	cd cordova
	cordova run browser
	
