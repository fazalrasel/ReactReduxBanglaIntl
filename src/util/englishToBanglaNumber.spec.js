import expect from 'expect';
import englishToBanglaNumber from './englishToBanglaNumber';
describe('englishToBanglaNumber function', () => {
  it('should return undefined if no value provided', () => {
    expect(englishToBanglaNumber()).toEqual(undefined);
  });
  it('should return empty if empty value provided', () => {
    expect(englishToBanglaNumber('')).toEqual('');
  });
  it('should convert all number to string', () => {
    expect(typeof englishToBanglaNumber(123)).toEqual('string');
    expect(typeof englishToBanglaNumber(123.123)).toEqual('string');
  });
  it('should return converted integer value', () => {
    expect(englishToBanglaNumber('1234567890')).toEqual('১২৩৪৫৬৭৮৯০');
    expect(englishToBanglaNumber('0987654321')).toEqual('০৯৮৭৬৫৪৩২১');
  });
  it('should return converted fraction value', () => {
    expect(englishToBanglaNumber(1234567890.123)).toEqual('১২৩৪৫৬৭৮৯০.১২৩');
    expect(englishToBanglaNumber(0.00123)).toEqual('০.০০১২৩');
  });

});
