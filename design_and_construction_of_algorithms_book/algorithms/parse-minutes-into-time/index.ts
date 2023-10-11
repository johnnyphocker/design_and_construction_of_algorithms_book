exports.parse_minutes_into_time = (mins: number): string => {
  if (mins < 0) return '';

  const mins_in_day: number = 24 * 60;
  const mins_in_hour: number = 60;

  const days: number = Math.floor(mins / mins_in_day);
  const hours: number = Math.floor((mins % mins_in_day) / mins_in_hour);
  const minutes: number = mins % mins_in_hour;

  let res: string = '';
  if (days > 0) {
    res += `${days} día${days > 1 ? 's' : ''} `;
  }
  if (hours > 0) {
    res += `${hours} hora${hours > 1 ? 's' : ''} `;
  }
  if (minutes > 0) {
    res += `${minutes} minuto${minutes > 1 ? 's' : ''}`;
  }

  return res.trim();
}