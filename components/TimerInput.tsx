import { useState, useEffect } from 'react';
import { calculateTime } from './helpers/calculateTime';

interface TimerInputProps {
  maxMinutes?: number;
  onTimeChange?: (minutes: number) => void;
  className?: string;
  seconds: boolean;
}

export default function TimerInput({
  maxMinutes,
  onTimeChange,
  className,
  seconds = false,
}: TimerInputProps) {
  const [rawInput, setRawInput] = useState('');
  const [visibleInput, setVisibleInput] = useState('');

  useEffect(() => {
    const { y, d, h, m, s, totalMinutesInInput } = calculateTime(
      rawInput,
      maxMinutes,
      seconds
    );

    // console.log('Years: ', y);
    // console.log('Days: ', d);
    // console.log('Hours: ', h);
    // console.log('Minutes: ', m);
    // console.log('Seconds: ', s);

    setVisibleInput(
      `${y > 0 ? y + 'y ' : ''}${d > 0 ? d + 'd ' : ''}${
        h > 0 ? h + 'hr ' : ''
      }${m > 0 ? m + 'min ' : ''}${s > 0 ? s + 'sec' : ''}`
    );

    if (onTimeChange) {
      onTimeChange(totalMinutesInInput);
    }
  }, [rawInput, maxMinutes, onTimeChange, seconds]);

  const handleInputChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.match(/[0-9]/)) {
      setRawInput(rawInput + e.key);
    } else if (e.key === 'Backspace') {
      setRawInput(rawInput.slice(0, -1));
    }
  };

  return (
    <input
      className={className}
      type='text'
      onKeyDown={handleInputChange}
      value={visibleInput}
      readOnly
    />
  );
}
