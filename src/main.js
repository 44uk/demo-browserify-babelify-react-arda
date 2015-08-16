global.React = require('react');

var Main = React.createClass({
  render: () => {
    return (
      <div>
        main component
      </div>
    )
  }
});

React.render(
  <Main />, document.getElementById('app')
);

