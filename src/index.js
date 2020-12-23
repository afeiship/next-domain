(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DOT = '.';

  nx.domain = function (inString, inLevel) {
    var level = inLevel || 1;
    var str = inString || location.href;
    var url = new URL(str);
    var parts = url.hostname.split(DOT);
    return parts.slice(-parts.length + level).join(DOT);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.domain;
  }
})();
