interface TimeValues {
  d: number;
  h: number;
  m: number;
  totalMinutesInInput: number;
}

export const calculateTime = (
  rawInput: string,
  maxMinutes: number = Infinity
): TimeValues => {
  let inputValue = parseInt(rawInput);
  let d = 0,
    h = 0,
    m = 0;

  // Calculate total minutes
  const totalMinutes = inputValue % 100;
  const totalHours = Math.floor((inputValue % 10000) / 100);
  const totalDays = Math.floor(inputValue / 10000);

  let totalMinutesInInput =
    totalMinutes + totalHours * 60 + totalDays * 24 * 60;

  if (totalMinutesInInput > maxMinutes) {
    totalMinutesInInput = maxMinutes;
    d = Math.floor(maxMinutes / (24 * 60));
    h = Math.floor((maxMinutes % (24 * 60)) / 60);
    m = maxMinutes % 60;
  } else {
    if (rawInput.length <= 2) {
      m = inputValue;
    } else if (rawInput.length === 3) {
      h = Math.floor(inputValue / 100);
      m = inputValue % 100;
    } else {
      d = Math.floor(inputValue / 10000);
      h = Math.floor((inputValue % 10000) / 100);
      m = inputValue % 100;
    }

    if (m >= 60) {
      h += Math.floor(m / 60);
      m = m % 60;
    }
    if (h >= 24) {
      d += Math.floor(h / 24);
      h = h % 24;
    }
  }

  return { d, h, m, totalMinutesInInput };
};
