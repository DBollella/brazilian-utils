import onlyNumbers from '../';

describe('normalize', () => {
  test('should remove all non numeric characters', () => {
    expect(onlyNumbers('123abc456?.#789xyz 0')).toBe('1234567890');
  });
});
