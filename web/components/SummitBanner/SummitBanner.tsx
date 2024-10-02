'use client';

import { IconArrowUpRight, IconCircleFilled } from '@tabler/icons-react';
import styles from './SummitBanner.module.css';
import { Flex, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';

// https://lu.ma/wxkp0tcf

export function SummitBanner() {
  const router = useRouter();
  return (
    <div onClick={() => router.push('/2024')} className={styles.bannerContainer}>
      <div className={styles.bannerContainer}>
        <img className={styles.bannerImage} src="/summit-banner.png" alt="summit-banner" />
        <div className={styles.scrollingText}>
          <TextElement />
        </div>
      </div>
    </div>
  );
}

// export function SummitBanner() {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push('https://lu.ma/wxkp0tcf');
//   };

//   return (
//     <div className={styles.bannerContainer} onClick={handleClick}>
//       <div className={styles.scrollingText}>
//         <TextElement />
//         <TextElement />
//       </div>
//     </div>
//   );
// }

function TextElement() {
  return (
    <Flex gap={20} justify={'center'} align={'center'}>
      <IconCircleFilled />
      <Text fw={900}>AI Mad Lab Summit</Text>
      <IconCircleFilled />
      <Text fw={900}>Limited seats</Text>
      <IconCircleFilled />
      <Text fw={900}>Get yours now</Text>
      <IconCircleFilled />
      <Text fw={900}>24th of October</Text>
      <IconCircleFilled />
      <Text fw={900}>FREE!</Text>
      <IconCircleFilled />

      <IconArrowUpRight />
      <IconArrowUpRight />
      <IconArrowUpRight />
      <IconArrowUpRight />
    </Flex>
  );
}
