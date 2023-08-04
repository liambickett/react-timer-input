interface TimeValues {
  y: number;
  d: number;
  h: number;
  m: number;
  s: number;
  totalMinutesInInput: number;
}

export const calculateTime = (
  rawInput: string,
  maxMinutes: number = Infinity,
  seconds: boolean = false
): TimeValues => {
  let inputValue = parseInt(rawInput);
  console.log('Input Value: ', inputValue);

  let y = 0,
    d = 0,
    h = 0,
    m = 0,
    s = 0;

  let totalSeconds = 0;
  let totalMinutes = 0;
  let totalHours = 0;
  let totalDays = 0;
  let totalYears = 0;

  if (seconds) {
    totalSeconds = inputValue % 100;
    totalMinutes = Math.floor((inputValue % 10000) / 100);
    totalHours = Math.floor((inputValue % 1000000) / 10000);
    totalDays = Math.floor((inputValue % 100000000) / 1000000);
    totalYears = Math.floor(inputValue / 100000000);
  } else {
    let tempValue = inputValue;
    totalMinutes = tempValue % 100;
    tempValue = Math.floor(tempValue / 100);
    totalHours = tempValue % 100;
    tempValue = Math.floor(tempValue / 100);
    totalDays = tempValue % 100;
    tempValue = Math.floor(tempValue / 100);
    totalYears = tempValue;
  }

  if (totalMinutes >= 60) {
    totalHours += Math.floor(totalMinutes / 60);
    totalMinutes = totalMinutes % 60;
  }

  if (totalSeconds >= 60) {
    totalMinutes += Math.floor(totalSeconds / 60);
    totalSeconds = totalSeconds % 60;
  }

  console.log('Total Seconds: ', totalSeconds);
  console.log('Total Minutes: ', totalMinutes);
  console.log('Total Hours: ', totalHours);
  console.log('Total Days: ', totalDays);
  console.log('Total Years: ', totalYears);

  let totalMinutesInInput =
    totalSeconds / 60 +
    totalMinutes +
    totalHours * 60 +
    totalDays * 24 * 60 +
    totalYears * 365 * 24 * 60;

  console.log('Total Minutes in Input: ', totalMinutesInInput);

  if (totalMinutesInInput > maxMinutes) {
    totalMinutesInInput = maxMinutes;
    y = Math.floor(maxMinutes / (365 * 24 * 60));
    d = Math.floor((maxMinutes % (365 * 24 * 60)) / (24 * 60));
    h = Math.floor((maxMinutes % (24 * 60)) / 60);
    m = Math.floor(maxMinutes % 60);
    s = (maxMinutes % 1) * 60;
  } else {
    if (seconds) {
      if (rawInput.length <= 2) {
        s = totalSeconds;
      } else if (rawInput.length === 3) {
        m = totalMinutes;
        s = totalSeconds;
      } else {
        y = totalYears;
        d = totalDays;
        h = totalHours;
        m = totalMinutes;
        s = totalSeconds;
      }
    } else {
      m = totalMinutes;
      h = totalHours;
      d = totalDays;
      y = totalYears;
      if (h >= 24) {
        h = h % 24;
      }
      if (d >= 365) {
        d = d % 365;
      }
    }
  }

  return { y, d, h, m, s, totalMinutesInInput };
};
