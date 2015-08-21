var Component = require('../../components/main');

var SubContext = require('../../contexts/sub');

var Subscriber = Arda.subscriber(function(context, subscribe) {
  subscribe('main:go-to-sub', function() {
    App.router.pushContext(SubContext, {});
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
