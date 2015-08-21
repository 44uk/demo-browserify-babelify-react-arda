global.React = require('react');
global.Arda  = require('arda');
global.App   = {};

var MainContext = require('../contexts/main');

App.router = new Arda.Router(
  Arda.DefaultLayout,
  document.getElementById('app')
);

App.router.pushContext(MainContext, {});
