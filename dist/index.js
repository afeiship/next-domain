/*!
 * name: @jswork/next-domain
 * description: Get url domain for next.
 * homepage: https://github.com/afeiship/next-domain
 * version: 1.0.0
 * date: 2020-12-23 07:38:21
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DOT = '.';

  nx.domain = function (inString, inLevel) {
    var level = inLevel || 1;
    var str = inString || location.host;
    var url = new URL(str);
    var parts = url.host.split(DOT);
    return parts.slice(-parts.length + level).join(DOT);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.domain;
  }
})();
