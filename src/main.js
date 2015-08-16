global.React = require('react');
var Arda = require('arda');

var Main = React.createClass({
  mixins: [Arda.mixin],

  render: () => {
    return (
      <div>
        main component
      </div>
    )
  }
});

class MainContext extends Arda.Context {
  get component() {
    return Main;
  }
}

var Router = new Arda.Router(
  Arda.DefaultLayout,
  document.getElementById('app')
);

Router.pushContext(MainContext, {});
