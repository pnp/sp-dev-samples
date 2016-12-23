var build = require('@microsoft/web-library-build');

build.karma.isEnabled = ()=>{ return false;};
build.tslint.mergeConfig({ 
  displayAsWarning: true
});
build.sass.mergeConfig({
  dropCssFiles: true // Drops .css files in the lib directory for webpack
});

build.initialize(require('gulp'));
