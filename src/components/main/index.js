module.exports = React.createClass({
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
