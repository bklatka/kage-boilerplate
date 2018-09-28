'use strict';
var Generator = require('yeoman-generator');
var mkdirp = require('mkdirp');
var fs = require('fs');

class GeneratorHelpers extends Generator {
  printBanner() {
    this.log('==========================================');
    this.log('KAGE BOILERPLATE V.1.0.0==================');
    this.log('==========================================');
  }

  copyFiles(sourceName, targetFolder, withAnswers = false) {
    if (!targetFolder) var destLocation = this.destinationPath();
    else var destLocation = this.destinationPath(targetFolder);

    var sourceLocation = this.templatePath(sourceName);

    var fileExist = fs.existsSync(sourceLocation);
    if (!fileExist) {
      this.log(`File ${sourceName} does not exist`);
      return;
    }

    if (withAnswers)
      this.fs.copyTpl(sourceLocation, destLocation, this.answers);
    else this.fs.copy(sourceLocation, destLocation);
    this.log(`Copied ${sourceName} to ${destLocation}`);
  }
}
module.exports = class extends GeneratorHelpers {
  constructor(args, opts) {
    super(args, opts);
    this.printBanner();
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'metaTitle',
        message: 'Page title: ',
        default: this.appname
      },
      {
        type: 'input',
        name: 'metaDesc',
        message: 'Metadata - description: '
      },
      {
        type: 'input',
        name: 'metaKeywords',
        message: 'Metadata - keywords (separated by comas): '
      },
      {
        type: 'confirm',
        name: 'metaIndex',
        message: 'Index in google?',
        default: true
      }
    ]);
  }

  scaffoldFolders() {
    this.log('Creating folders');
    mkdirp.sync('source');
    mkdirp.sync('source/css');
    mkdirp.sync('source/js');
    mkdirp.sync('source/lib');
    mkdirp.sync('source/static_files');
    mkdirp.sync('source/modules');
    this.log('Folders created');
  }

  copyMainFiles() {
    var copyToSource = ['modules', 'css', 'js', 'lib', 'index.html'].map(
      name => ({
        source: name,
        dest: 'source/' + name
      })
    );

    var copyToRoot = ['gulpfile.js', '.bowerrc', '.gitignore'].map(name => ({
      source: name,
      dest: name
    }));

    var filesToCopy = [
      ...copyToSource,
      ...copyToRoot,
      {
        source: 'package.json',
        dest: 'package.json',
        asTemplate: true
      },
      {
        source: 'bower.json',
        dest: 'bower.json',
        asTemplate: true
      },
      {
        source: 'modules/_partials/head.html',
        dest: 'source/modules/_partials/head.html',
        asTemplate: true
      }
    ];

    filesToCopy.map(file => {
      this.copyFiles(file.source, file.dest, file.asTemplate);
    });
  }

  install() {
    this.installDependencies();
  }

  buildProject() {
    this.spawnCommand('npm', ['serve']);
  }
};
