(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DOT = '.';

  nx.domain = function (inString) {
    var str = inString || location.host;
    var url = new URL(str);
    return url.host.split(DOT).slice(-2).join(DOT);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.domain;
  }
})();
