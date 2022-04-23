const downloader = {};

const path = require('path')
const git = require('isomorphic-git')
const http = require('isomorphic-git/http/node')
const fs = require('fs')
const buddyPondPath = path.join(process.cwd(), 'buddypond');
const buddyPondAppStorePath = path.join(process.cwd(), 'buddypond-appstore');

// TODO: implement git pull as auto-updater ( with configurable settings )
downloader.clone = function (cb) {
  console.log('About to install Buddy Pond locally to: ' + buddyPondPath);
  console.log('Contacting Github...');
  console.log('Attempting to clone Buddy Pond from: https://github.com/marak/buddypond');
  git.clone({ 
    fs,
    http,
    dir: buddyPondPath,
    url: 'https://github.com/marak/buddypond',
    onMessage: console.log
  }).then(function(){
    console.log('Buddy Pond has been downloaded to: ' + buddyPondAppStorePath)
    cb(null);
  });
}

module.exports = downloader;