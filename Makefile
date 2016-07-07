
#########################
# APP CONFIG
#
ENTRY = ./bootstrap.js

LAUNCHER = ./node_modules/.bin/electron 
#########################
# BUILD
#
BUILD_DIR = build
#########################
# CSS PROCESSOR
#
CCSS = lessc

CSS_OPTS = --clean-css="--s1 --advanced"

CSS_IFILES = $(shell find src/ -iname "*.less")
CSS_IFILE = $(BUILD_DIR)/styles/build.css
CSS_OFILE = public/styles/main.css
#########################

all: css run

stylesDir:
	@mkdir -p $(BUILD_DIR)/styles

build-css: stylesDir
	@echo "-- Building CSS"
	@cat $(CSS_IFILES) > $(CSS_IFILE)

pcss: build-css
	@echo "##  CSS COMPILED  ##"
	@cat $(CSS_IFILE)

css: build-css
	@echo "-- Compiling CSS"
	@$(CCSS) $(CSS_OPTS) $(CSS_IFILE) $(CSS_OFILE)

run:
	@$(LAUNCHER) $(ENTRY)

clean:
	@rm -rf $(BUILD_DIR)
