exports.diagonal_difference = (matrix: number[][]): number => {
  const n: number = matrix.length;
  let left_diagonal_sum: number = 0;
  let right_diagonal_sum: number = 0;

  for (let row = 0; row < n; row++) {
    left_diagonal_sum += matrix[row][row];
    right_diagonal_sum += matrix[row][n - 1 - row];
  }

  return Math.abs(left_diagonal_sum - right_diagonal_sum);
}