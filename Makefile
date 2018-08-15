package:
	mkdir -p build;

	cd src && zip -r -9 ../build/put-new-tab-right.zip \
		manifest.json \
		img/ \
		*.js \
		*.html;
