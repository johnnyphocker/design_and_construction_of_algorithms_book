exports.snail_sort = (matrix: number[][]): number[] => {
  if (!matrix || matrix.length ===0) return [];
  const result: number[] = [];
  let top: number = 0;
  let bottom: number = matrix.length - 1;
  let left: number = 0;
  let right: number = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right --;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i>= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
}