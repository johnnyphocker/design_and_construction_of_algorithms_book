exports.recursive_multiplication = (x: number, y: number): number => {
  if (x === 0 || y === 0) return 0;
  if (x < 0) {
    return -this.recursive_multiplication(-x, y);
  }
  if (y < 0) {
    return -this.recursive_multiplication(x, -y);
  }
  return x + this.recursive_multiplication(x, y - 1);
}