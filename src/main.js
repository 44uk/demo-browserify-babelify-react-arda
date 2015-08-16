global.React = require('react');
var Arda = require('arda');

var Main = React.createClass({
  mixins: [Arda.mixin],

  onClick: function (ev) {
    this.dispatch('main:go-to-sub');
  },

  render: function () {
    return (
      <div>
        <h1>Main Component</h1>
        <button onClick={this.onClick}>Go to sub</button>
      </div>
    )
  }
});

var MainSubscriber = Arda.subscriber(function(context, subscribe){
  subscribe('main:go-to-sub', function () {
    Router.pushContext(SubContext, {});
  });
});

class MainContext extends Arda.Context {
  get component() {
    return Main;
  }
  get subscribers() {
    return [MainSubscriber];
  }
}

var Sub = React.createClass({
  mixins: [Arda.mixin],

  onClick: function (ev) {
    this.dispatch('sub:go-to-main');
  },

  render: function () {
    return (
      <div>
        <h1>Sub Component</h1>
        <button onClick={this.onClick}>Go to main</button>
      </div>
    )
  }
});

var SubSubscriber = Arda.subscriber(function(context, subscribe){
  subscribe('sub:go-to-main', function () {
    Router.popContext();
  });
});

class SubContext extends Arda.Context {
  get component() {
    return Sub;
  }
  get subscribers() {
    return [SubSubscriber];
  }
}

var Router = new Arda.Router(
  Arda.DefaultLayout,
  document.getElementById('app')
);

Router.pushContext(MainContext, {});
