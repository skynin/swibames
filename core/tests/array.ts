import assert from 'assert';
import add from '../src/add'

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('add', function () {
  it('should return 6 when the value is string=1,2,3', function () {
    assert.equal(add('1,2,3'), 6);
  });
});
