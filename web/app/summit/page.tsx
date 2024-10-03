'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Summit() {
  const router = useRouter();

  useEffect(() => {
    router.push('/summit-2024');
  }, [router]);

  return <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}></div>;
}
