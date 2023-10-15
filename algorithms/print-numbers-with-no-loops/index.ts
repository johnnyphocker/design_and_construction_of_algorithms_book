exports.print_numbers_in_range = (start: number, end: number): void => {
  if (start <= end) {
    console.log(start);
    this.print_numbers_in_range(start + 1, end);
  }
}