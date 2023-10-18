exports.create_phone_number = (nums: number[]): string => {
  if (nums.length !== 10 || !nums.every((num) => num >= 0 && num <= 9)) {
    return 'Invalid input';
  }

  const area_code: string = nums.slice(0, 3).join('');
  const first_part: string = nums.slice(3, 6).join('');
  const second_part: string = nums.slice(6).join('');

  return `(${area_code}) ${first_part}-${second_part}`;
}