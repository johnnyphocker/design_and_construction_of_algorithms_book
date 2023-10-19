exports.string_expansion = (str: string): string => {
  let res: string = '';
  let repeat: number = 1;
  for (let i: number = 0; i < str.length; i++) {
    const char: any = str[i];
    if (!isNaN(char)) {
      repeat = parseInt(char);
    } else {
      res += char.repeat(repeat);
    }
  }
  return res;
}