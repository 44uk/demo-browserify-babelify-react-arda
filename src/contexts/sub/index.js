var Component = require('../../components/sub');

var Subscriber = Arda.subscriber(function(context, subscribe) {
  subscribe('sub:go-to-main', function() {
    App.router.popContext();
  });
});

module.exports = class Context extends Arda.Context {
  get component() {
    return Component;
  }
  get subscribers() {
    return [Subscriber];
  }
}
