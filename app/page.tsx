'use client';

import Image from 'next/image';
import styles from './page.module.css';
import TimerInput from '@/components/TimerInput';
import { useState } from 'react';

export default function Home() {
  const [rawValue, setRaw] = useState(0);
  const [formattedValue, setFormatted] = useState('');

  const [seconds, setSeconds] = useState(false);

  return (
    <main className='main align-center justify-center'>
      <div className='flex column align-center justify-center gap-10'>
        <h1 className='flex justify-center'>REACT TIMER INPUT</h1>
        <div className='flex justify-center' style={{ position: 'relative' }}>
          <TimerInput
            className='input-styles'
            onTimeChange={setRaw}
            seconds={seconds}
          />
          <button
            style={{
              cursor: 'pointer',
              all: 'unset',
              position: 'absolute',
              display: 'flex',
              justifyContent: 'space-between',
              width: '85%',
              bottom: -25,
            }}
            onClick={() => setSeconds(!seconds)}
          >
            Toggle Seconds
            <span>{seconds ? 'Seconds Enables' : 'Seconds Disables'}</span>
          </button>
        </div>

        <p className='medium'>
          <span className='light'>Raw Value </span>
          {rawValue || 0} mins
        </p>
      </div>

      <div className='effect-1'></div>
      <div className='effect-2'></div>
    </main>
  );
}
