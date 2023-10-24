const pofi = (n: number): string => {
  const remainder: number = n % 4;
  switch(remainder) {
    case 0: {
      return '1';
    }
    case 1: {
      return 'i';
    }
    case 2: {
      return '-1'
    }
    default: {
      return '-i';
    }
  }
}