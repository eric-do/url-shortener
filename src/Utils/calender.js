export const getZeroIndexMonth = date => date.getMonth() - 1;

export const getMonthAsMatrix = date => {
  const firstDay = new Date(date.getFullYear(), getZeroIndexMonth(date), 1);
  const lastDay = new Date(date.getFullYear(), getZeroIndexMonth(date) + 1, 0);
  const month = Array(5).fill().map(() => Array(7).fill(0));

  let dayCount = 1;
  
  for (let i = firstDay.getDay(); i < month[0].length; i++) {
    month[0][i] = new Date(date.getFullYear(), date.getMonth(), dayCount);
    dayCount++;
  }

  while (dayCount < lastDay.getDate()) {
    for (let week = 1; week < month.length; week++) {
      for (let day = 0; day < month[week].length && dayCount <= lastDay.getDate(); day++) {
        month[week][day] = new Date(date.getFullYear(), date.getMonth() - 1, dayCount);
        dayCount++;
      }
    }
  }

  return month;
}

export default { getZeroIndexMonth, getMonthAsMatrix };