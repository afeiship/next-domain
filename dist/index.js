/*!
 * name: @jswork/next-domain
 * description: Get url domain for next.
 * homepage: https://github.com/afeiship/next-domain
 * version: 1.0.2
 * date: 2020-12-24 18:07:19
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DOT = '.';

  nx.domain = function (inString, inLevel) {
    var level = inLevel || 1;
    var str = inString || location.href;
    var url = new URL(str);
    var parts = url.hostname.split(DOT);
    var target = parts.length === 2 ? parts : parts.slice(-parts.length + level);
    return target.join(DOT);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.domain;
  }
})();
