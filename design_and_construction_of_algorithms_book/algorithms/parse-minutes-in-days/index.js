exports.parse_minutes_in_days = (mins) => {
  if (mins < 0) return;

  const mins_in_day = 24 * 60;
  const mins_in_hour = 60;

  const days = Math.floor(mins / mins_in_day);
  const hours = Math.floor((mins % mins_in_day) / mins_in_hour);
  const minutes = mins % mins_in_hour;

  let res = '';
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