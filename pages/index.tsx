import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { useTheme, Text } from '@nextui-org/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { theme } = useTheme();
  return (
    <>
      <Head>
        <title>Geeks Crew</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div>
          <Text
            css={{
              color: '$red700',
              fontSize: '$8xl',
              padding: '$2 $4',
            }}
          >
            Welcome to Geeks Crew
          </Text>
          <Text
            css={{
              textAlign: 'center',
              color: '$white700',
              fontSize: '$3xl',
              padding: '$2 $4',
            }}
          >
            “Opportunities do not happen, you create them.”
          </Text>
        </div>
      </main>
    </>
  );
}
