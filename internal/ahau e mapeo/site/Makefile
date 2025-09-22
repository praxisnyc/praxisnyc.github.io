NPM := npm
VENDOR_DIR := assets/vendor/
SCSS_VENDOR_DIR := _sass/vendor/
JEKYLL := jekyll

install:
	$(NPM) install

include-npm-deps:

serve: install include-npm-deps
	JEKYLL_ENV=production $(JEKYLL) serve --livereload