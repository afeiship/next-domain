(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.domain www.baidu.com should return baidu.com', function () {
      var str = 'https://www.baidu.com';
      var res = nx.domain(str);
      expect(res).toBe('baidu.com');
    });
  });
})();
