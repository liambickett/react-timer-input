'use client';

import Image from 'next/image';
import styles from './page.module.css';
import TimerInput from '@/components/TimerInput';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.head}>REACT TIMER INPUT</div>
      <TimerInput />
    </main>
  );
}
