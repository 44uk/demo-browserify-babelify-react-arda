module.exports = React.createClass({
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
