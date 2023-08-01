import { useState, useEffect } from 'react';
import { calculateTime } from './helpers/calculateTime';

interface TimerInputProps {
  maxMinutes?: number;
  onTimeChange?: (minutes: number) => void;
  className?: string;
}

export default function TimerInput({
  maxMinutes,
  onTimeChange,
  className,
}: TimerInputProps) {
  const [rawInput, setRawInput] = useState('');
  const [visibleInput, setVisibleInput] = useState('');

  useEffect(() => {
    const { d, h, m, totalMinutesInInput } = calculateTime(
      rawInput,
      maxMinutes
    );
    console.log('d', d, 'h', h, 'm', m);

    setVisibleInput(
      `${d > 0 ? d + 'd ' : ''}${h > 0 ? h + 'hr ' : ''}${
        m > 0 ? m + 'min' : ''
      }`
    );

    if (onTimeChange) {
      onTimeChange(totalMinutesInInput);
    }
  }, [rawInput, maxMinutes, onTimeChange]);

  const handleInputChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.match(/[0-9]/)) {
      setRawInput(rawInput + e.key);
    } else if (e.key === 'Backspace') {
      setRawInput(rawInput.slice(0, -1));
    }
  };

  return (
    <input
      type='text'
      onKeyDown={handleInputChange}
      value={visibleInput}
      readOnly
    />
  );
}
