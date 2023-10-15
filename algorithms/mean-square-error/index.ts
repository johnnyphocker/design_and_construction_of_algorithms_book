exports.mean_square_error = (arr1: number[], arr2: number[]): number => {
  if (arr1.length !== arr2.length) {
    throw new Error('Input arrays must have the same length');
  }
  const square_error: number[] = arr1.map((val1, index) => {
    const val2: number = arr2[index];
    const diff: number = Math.abs(val1 - val2);
    return Math.pow(diff, 2);
  });
  const sum_square_error: number = square_error.reduce((total, num) => total + num, 0);
  return sum_square_error / arr1.length;
}