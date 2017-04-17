'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    console.log('==========================================');
    console.log('KAGE BOILERPLATE V.1.0====================');
    console.log('==========================================');

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
    mkdirp.sync('source');
    mkdirp.sync('source/css');
    mkdirp.sync('source/js');
    mkdirp.sync('source/lib');
    mkdirp.sync('source/static_files');
    mkdirp.sync('source/modules');
    
  },

  copyMainFiles: function(){
      this.fs.copy(
          this.templatePath('modules'),
          this.destinationPath('source/modules')
      );

      this.fs.copy(
          this.templatePath('css'),
          this.destinationPath('source/css')
      );

      this.fs.copy(
          this.templatePath('js'),
          this.destinationPath('source/js')
      );

      this.fs.copy(
          this.templatePath('lib'),
          this.destinationPath('source/lib')
      );
      this.copy('index.html', 'source/index.html');

      this.copy('gulpfile.js', 'gulpfile.js');
      this.copy('.bowerrc', '.bowerrc');
      this.copy('.gitignore', '.gitignore');


      

   
      var context = { 
          metaTitle: this.metaTitle,
          metaDesc: this.metaDesc,
          metaKeywords: this.metaKeywords,
          metaIndex: this.metaIndex
      };
      
      this.template('package.json', 'package.json', context);
      this.template('bower.json', 'bower.json', context);
      this.template('modules/_partials/head.html', 'source/modules/_partials/head.html', context);
  },

  install: function () {
    this.installDependencies();
  },

  buildProject:function(){
    this.spawnCommand('gulp', ['serve']);
  }

});
