exports.round = (num: number): number => {
  const decimal: number = num % 1;
  if (decimal < 0.5) {
    return num - decimal;
  }
  return num - decimal + 1;
};

exports.ceil = (num: number): number => {
  const decimal: number = num % 1;
  if (decimal > 0) {
    return num - decimal + 1;
  }
  return num;
};

exports.floor = (num: number): number => {
  const decimal: number = num % 1;
  return num - decimal;
};