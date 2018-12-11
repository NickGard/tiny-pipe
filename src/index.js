Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipe = pipe;

function pipe() {
  var fns = [].slice.call(arguments);
  var context = this;
  return function() {
    return fns.reduce(function(args, fn) {
      return fn.apply(context, [].concat(args));
    }, [].slice.call(arguments));
  };
}
