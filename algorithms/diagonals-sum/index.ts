const diagonals_sum = (matrix: number[][]): number => {
  const size: number = matrix.length;
  let main_diagonal = 0;
  let secondary_diagonal = 0;

  for (let i = 0; i < size; i++) {
    main_diagonal += matrix[i][i];
    secondary_diagonal += matrix[i][size -1 - i];
  }

  return main_diagonal + secondary_diagonal;
}