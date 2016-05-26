'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    console.log('##############GREATINGS##############');

    var prompts = [{
      name: 'metaTitle',
      message: 'Metadata - title: ',
    },{
      name: 'metaDesc',
      message: 'Metadata - description: ',
    },{
      name:'metaKeywords',
      message: 'Metadata - keywords (separated by comas): '
    },{
      type:'confirm',
      name:'metaIndex',
      message:'Index in google?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.metaTitle = props.metaTitle;
      this.metaDesc = props.metaDesc;
      this.metaKeywords = props.metaKeywords;
      if(props.metaIndex){
        this.metaIndex='index,follow';
      }
      else{
        this.metaIndex='nofollow';
      }
      
   
      done();
    }.bind(this));
  },

  scaffoldFolders: function(){
    mkdirp.sync("source");
    mkdirp.sync("source/css");
    mkdirp.sync("source/html");
    mkdirp.sync("source/js/_modules");
    mkdirp.sync("source/static_files");
    mkdirp.sync("source/html/_modules");
    
  },

  copyMainFiles: function(){
      this.copy("html/_footer.html", "source/html/_modules/footer.html");
      this.copy("html/_index.html", "source/html/index.html");

      this.copy("css/_global.scss", "source/css/global.scss");
      this.copy("css/_variables.scss", "source/css/_variables.scss");

      this.copy("js/_app.js", "source/js/_modules/app.js");

      this.copy("lib/build.js", "source/lib/build.js");
      this.copy("lib/html.js", "source/lib/html.js");
      this.copy("lib/sass.js", "source/lib/sass.js");
      this.copy("lib/scripts.js", "source/lib/scripts.js");
      this.copy("lib/serve.js", "source/lib/serve.js");
      this.copy("lib/static.js", "source/lib/static.js");
      this.copy("lib/watch.js", "source/lib/watch.js");

      this.copy("_gulpfile.js", "gulpfile.js");
      this.copy("_.bowerrc", ".bowerrc");
      

   
      var context = { 
          metaTitle: this.metaTitle,
          metaDesc: this.metaDesc,
          metaKeywords: this.metaKeywords,
          metaIndex: this.metaIndex,
      };
      
      this.template("_package.json", "package.json", context);      
      this.template("_bower.json", "bower.json", context);
      this.template("html/_head.html", "source/html/_modules/head.html", context);
  },

  install: function () {
    this.installDependencies();
  },

  buildProject:function(){
    this.spawnCommand('gulp', ['build']);
    this.spawnCommand('gulp', ['serve']);
  },

});
