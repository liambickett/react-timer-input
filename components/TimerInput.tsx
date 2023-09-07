import { useState, useEffect } from 'react';
import { calculateTime } from './helpers/calculateTime';

interface TimerInputProps {
  style?: React.CSSProperties;
  maxMinutes?: number;
  onTimeChange?: (minutes: number) => void;
  setSeconds?: (seconds: number) => void;
  setMinutes?: (minutes: number) => void;
  setHours?: (hours: number) => void;
  setDays?: (hours: number) => void;
  setYears?: (minutes: number) => void;
  className?: string;
  seconds?: boolean;
}

export default function TimerInput({
  style,
  maxMinutes,
  className,
  seconds = false,
  onTimeChange,
  setSeconds,
  setMinutes,
  setHours,
  setDays,
  setYears,
}: TimerInputProps) {
  const [rawInput, setRawInput] = useState('');
  const [visibleInput, setVisibleInput] = useState('');

  useEffect(() => {
    const { y, d, h, m, s, totalMinutesInInput } = calculateTime(
      rawInput,
      maxMinutes,
      seconds
    );

    setVisibleInput(
      `${y > 0 ? y + 'y ' : ''}${d > 0 ? d + 'd ' : ''}${
        h > 0 ? h + 'hr ' : ''
      }${m > 0 ? m + 'min ' : ''}${s > 0 ? s + 'sec' : ''}`
    );

    if (onTimeChange) {
      onTimeChange(totalMinutesInInput);
    }

    setSeconds && setSeconds(s || 0);
    setMinutes && setMinutes(m || 0);
    setHours && setHours(h || 0);
    setDays && setDays(d || 0);
    setYears && setYears(y || 0);
  }, [
    rawInput,
    maxMinutes,
    onTimeChange,
    seconds,
    setSeconds,
    setMinutes,
    setHours,
    setDays,
    setYears,
  ]);

  const handleInputChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.match(/[0-9]/)) {
      setRawInput(rawInput + e.key);
    } else if (e.key === 'Backspace') {
      setRawInput(rawInput.slice(0, -1));
    }
  };

  // Prevent changes to the input's value from the onChange event
  const preventInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <input
      style={style}
      className={className}
      type='text'
      onKeyDown={handleInputChange}
      onChange={preventInputChanges}
      value={visibleInput}
    />
  );
}
