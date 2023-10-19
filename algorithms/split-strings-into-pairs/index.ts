exports.split_strings_into_pairs = (str: string): string[] => {
  const pairs: string[] = [];
  for (let i = 0; i < str.length; i += 2) {
    const pair: string = str.slice(i, i + 2);
    pairs.push(pair);
  }

  if (str.length % 2 === 1) {
    pairs[pairs.length - 1] += '_';
  }

  return pairs;
}