exports.symmetric_password = (arr: number[]): string => {
  const sqrt: number = Math.sqrt(arr.length);

  if (sqrt % 1 !== 0) {
    return "No";
  }

  const half: number = Math.floor(arr.length / 2);
  const left_half: number[] = arr.slice(0, half);
  const right_half: number[] = arr.reverse().slice(0, half);

  for (let i = 0; i < half; i++) {
    if (left_half[i] !== right_half[i]) {
      return 'No';
    }
  }

  return 'Yes';
}