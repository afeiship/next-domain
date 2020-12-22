(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.domain www.baidu.com should return baidu.com', function () {
      var str = 'https://www.baidu.com';
      var res = nx.domain(str);
      expect(res).toBe('baidu.com');
    });

    test('nx.domain http://www.95559.com.cn should return 95559.com.cn', function () {
      var str = 'http://www.95559.com.cn/BankCommSite/default.shtml';
      var res = nx.domain(str);
      expect(res).toBe('95559.com.cn');
    });

    test('nx.domain multiple step domain site', function () {
      var str = 'http://12345.i.taobao.com';
      var res = nx.domain(str, 2);
      expect(res).toBe('taobao.com');
    });
  });
})();
