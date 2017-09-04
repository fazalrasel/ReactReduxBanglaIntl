let banglaNumberMap = {
  '0': '০',
  '1': '১',
  '2': '২',
  '3': '৩',
  '4': '৪',
  '5': '৫',
  '6': '৬',
  '7': '৭',
  '8': '৮',
  '9': '৯'
};

const getDigitBanglaFromEnglish = function (value) {
  if (value === undefined || value.length < 0) return value;
  value = value.toString();
  for (let x in banglaNumberMap) {
    value = value.replace(new RegExp(x, 'g'), banglaNumberMap[x]);
  }
  return value;
};

export default getDigitBanglaFromEnglish;