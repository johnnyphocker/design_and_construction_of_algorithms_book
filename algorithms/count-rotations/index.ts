exports.count_rotations = (directions: string[]): number => {
  let degrees: number = 0;
  for (const direction of directions) {
    if (direction === 'right') {
      degrees += 90;
    } else if (direction === 'left') {
      degrees -= 90;
    }
  }
  return Math.floor(Math.abs(degrees / 360));
} 