exports.matrix_addition = (a: number[][], b: number[][]): number[][] => {
  const res: number[][] = [];
  for (let i = 0; i < a.length; i++) {
    const row: number[] = [];
    for (let j = 0; j < a[i].length; j++) {
      row.push(a[i][j] + b[i][j]);
    }
    res.push(row);
  }
  return res;
}