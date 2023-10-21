exports.interchange_arr_extremities = (arr: number[]): number[] => {
  const n: number = arr.length;
  const half: number = Math.floor(n / 2);

  for (let i = 0; i < half; i++){
    const temp = arr[i];
    arr[i] = arr[n - 1- i];
    arr[n - 1 - i] = temp;
  }

  return arr;
}